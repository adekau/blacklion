CREATE PROCEDURE [Items].[UpdateBagDetail]
	@Table [Items].[BagDetail] READONLY,
	@Id INT OUTPUT
	WITH EXECUTE AS CALLER
AS
BEGIN
	SET NOCOUNT ON;

	DECLARE @BagDetailId INT = null

	MERGE [Items].[BagDetail] T
	USING @Table S
	ON T.Size = S.Size
		AND T.NoSellOrSort = S.NoSellOrSort
	WHEN MATCHED THEN
		UPDATE SET @BagDetailId = T.Id
	WHEN NOT MATCHED THEN
		INSERT VALUES (S.Size, S.NoSellOrSort);
	
	If @BagDetailId IS NULL
		SET @BagDetailId = SCOPE_IDENTITY()

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
		@BagDetailId,
		NULL,
		NULL,
		NULL,
		NULL
	)

	MERGE [Items].[Detail] T
	USING #Details S
	ON T.BagDetailId = S.BagDetailId
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
