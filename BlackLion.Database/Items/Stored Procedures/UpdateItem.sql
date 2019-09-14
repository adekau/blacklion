CREATE PROCEDURE [Items].[UpdateItem]
	@Table [Items].[Item] READONLY,
	@Id INT OUTPUT
	WITH EXECUTE AS CALLER
AS
BEGIN
	SET NOCOUNT ON;

	MERGE [Items].[Item] T
	USING @Table S
	ON T.[ItemId] = S.[ItemId]
	WHEN MATCHED THEN
		UPDATE SET @Id = T.Id
	WHEN NOT MATCHED THEN
		INSERT VALUES (S.ItemId, S.ChatLink, S.[Name], S.Icon, S.[Description], S.[Type], S.Rarity, S.[Level], S.VendorValue,
		S.DefaultSkin, S.Flags, S.GameTypes, S.Restrictions, S.DetailsId);
	
	IF @Id IS NULL
		SET @Id = SCOPE_IDENTITY()

	RETURN @Id;
END
