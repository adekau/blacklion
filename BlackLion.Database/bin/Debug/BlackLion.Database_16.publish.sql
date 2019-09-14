﻿/*
Deployment script for BlackLion

This code was generated by a tool.
Changes to this file may cause incorrect behavior and will be lost if
the code is regenerated.
*/

GO
SET ANSI_NULLS, ANSI_PADDING, ANSI_WARNINGS, ARITHABORT, CONCAT_NULL_YIELDS_NULL, QUOTED_IDENTIFIER ON;

SET NUMERIC_ROUNDABORT OFF;


GO
:setvar DatabaseName "BlackLion"
:setvar DefaultFilePrefix "BlackLion"
:setvar DefaultDataPath "E:\SQLServer2017\MSSQL14.MSSQLSERVER\MSSQL\DATA\"
:setvar DefaultLogPath "E:\SQLServer2017\MSSQL14.MSSQLSERVER\MSSQL\DATA\"

GO
:on error exit
GO
/*
Detect SQLCMD mode and disable script execution if SQLCMD mode is not supported.
To re-enable the script after enabling SQLCMD mode, execute the following:
SET NOEXEC OFF; 
*/
:setvar __IsSqlCmdEnabled "True"
GO
IF N'$(__IsSqlCmdEnabled)' NOT LIKE N'True'
    BEGIN
        PRINT N'SQLCMD mode must be enabled to successfully execute this script.';
        SET NOEXEC ON;
    END


GO
USE [$(DatabaseName)];


GO
PRINT N'Altering [Items].[UpdateBagDetail]...';


GO
ALTER PROCEDURE [Items].[UpdateBagDetail]
	@Table [Items].[BagDetail] READONLY,
	@Id INT OUTPUT
	WITH EXECUTE AS CALLER
AS
BEGIN
	SET NOCOUNT ON;

	MERGE [Items].[BagDetail] T
	USING @Table S
	ON T.Size = S.Size
		AND T.NoSellOrSort = S.NoSellOrSort
	WHEN MATCHED THEN
		UPDATE SET @Id = T.Id
	WHEN NOT MATCHED THEN
		INSERT VALUES (S.Size, S.NoSellOrSort);

	SET @Id = CASE WHEN EXISTS(SELECT @Id) THEN @Id ELSE SCOPE_IDENTITY() END

	RETURN @Id;
END
GO
PRINT N'Update complete.';


GO
