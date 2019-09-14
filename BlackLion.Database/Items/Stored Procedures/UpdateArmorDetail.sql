CREATE PROCEDURE [Items].[UpdateArmorDetail]
	@Table [Items].[ArmorDetail] READONLY,
	@Id INT OUTPUT
	WITH EXECUTE AS CALLER
AS
BEGIN
	SET NOCOUNT ON;

	DECLARE @ArmorId INT = null

	MERGE [Items].[ArmorDetail] T
	USING @Table S
	ON T.[Type] = S.[Type]
		AND T.WeightClass = S.WeightClass
	WHEN MATCHED THEN
		UPDATE SET @ArmorId = T.Id
	WHEN NOT MATCHED THEN
		INSERT VALUES (S.[Type], S.WeightClass, S.Defense, S.InfixUpgradeId, S.SuffixItemId, S.SecondarySuffixItemId, S.StatChoices);
	
	If @ArmorId IS NULL
		SET @ArmorId = SCOPE_IDENTITY()

	SELECT TOP 0 * INTO #Details FROM Items.Detail
	INSERT #Details (
		ArmorDetailId,
		BackItemDetailId,
		BagDetailId,
		ConsumableDetailId,
		ContainerDetailId,
		GatheringToolDetailId,
		GizmoDetailId
	) VALUES (
		@ArmorId,
		NULL,
		NULL,
		NULL,
		NULL,
		NULL,
		NULL
	)

	MERGE [Items].[Detail] T
	USING #Details S
	ON T.ArmorDetailId = S.ArmorDetailId
	WHEN MATCHED THEN
		UPDATE SET @Id = T.Id
	WHEN NOT MATCHED THEN
		INSERT VALUES (
			S.ArmorDetailId,
			S.BackItemDetailId,
			S.BagDetailId,
			S.ConsumableDetailId,
			S.ContainerDetailId,
			S.GatheringToolDetailId,
			S.GizmoDetailId
		);

	IF @Id IS NULL
		SET @Id = SCOPE_IDENTITY()

	RETURN @Id;
END
