CREATE PROCEDURE [Items].[UpdateInfixUpgrade]
	@Table [Items].[InfixUpgrade] READONLY,
	@Id INT OUTPUT
	WITH EXECUTE AS CALLER
AS
BEGIN
	SET NOCOUNT ON;

	MERGE [Items].[InfixUpgrade] T
	USING @Table S
	ON T.ItemStatId = S.ItemStatId
		AND T.BuffId = S.BuffId
	WHEN MATCHED THEN
		UPDATE SET @Id = T.Id
	WHEN NOT MATCHED THEN
		INSERT VALUES (S.ItemStatId, S.BuffId);
	
	IF @Id IS NULL
		SET @Id = SCOPE_IDENTITY()

	RETURN @Id;
END
