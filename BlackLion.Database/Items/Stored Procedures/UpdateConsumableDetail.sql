CREATE PROCEDURE [Items].[UpdateConsumableDetail]
	@Table [Items].[ConsumableDetail] READONLY,
	@Id INT OUTPUT
	WITH EXECUTE AS CALLER
AS
BEGIN
	SET NOCOUNT ON;

	DECLARE @ConsumableId INT = null

	MERGE [Items].[ConsumableDetail] T
	USING @Table S
	ON T.[Type] = S.[Type]
		AND T.[Name] = S.[Name]
		AND T.ApplyCount = S.ApplyCount
		AND T.DurationMs = S.DurationMs
	WHEN MATCHED THEN
		UPDATE SET @ConsumableId = T.Id
	WHEN NOT MATCHED THEN
		INSERT VALUES (S.[Type], S.[Description], S.DurationMs, S.UnlockType, S.ColorId, S.RecipeId, S.ExtraRecipeIds, S.GuildUpgradeId,
		S.ApplyCount, S.[Name], S.Icon, S.SkinIds);
	
	If @ConsumableId IS NULL
		SET @ConsumableId = SCOPE_IDENTITY()

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
		NULL,
		NULL,
		NULL,
		@ConsumableId,
		NULL,
		NULL,
		NULL
	)

	MERGE [Items].[Detail] T
	USING #Details S
	ON T.ConsumableDetailId = S.ConsumableDetailId
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
