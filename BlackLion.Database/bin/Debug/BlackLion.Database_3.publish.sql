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
PRINT N'The following operation was generated from a refactoring log file 2473ec6a-4b69-4cf6-9f3e-0d5c1a6c50f9';

PRINT N'Rename [Items].[FK_Items_Item_Detail] to FK_Item_Detail';


GO
EXECUTE sp_rename @objname = N'[Items].[FK_Items_Item_Detail]', @newname = N'FK_Item_Detail', @objtype = N'OBJECT';


GO
PRINT N'Altering [Items].[Detail]...';


GO
ALTER TABLE [Items].[Detail]
    ADD [ArmorDetailId]    INT NULL,
        [BackItemDetailId] INT NULL;


GO
-- Refactoring step to update target server with deployed transaction logs

IF OBJECT_ID(N'dbo.__RefactorLog') IS NULL
BEGIN
    CREATE TABLE [dbo].[__RefactorLog] (OperationKey UNIQUEIDENTIFIER NOT NULL PRIMARY KEY)
    EXEC sp_addextendedproperty N'microsoft_database_tools_support', N'refactoring log', N'schema', N'dbo', N'table', N'__RefactorLog'
END
GO
IF NOT EXISTS (SELECT OperationKey FROM [dbo].[__RefactorLog] WHERE OperationKey = '2473ec6a-4b69-4cf6-9f3e-0d5c1a6c50f9')
INSERT INTO [dbo].[__RefactorLog] (OperationKey) values ('2473ec6a-4b69-4cf6-9f3e-0d5c1a6c50f9')

GO

GO
PRINT N'Update complete.';


GO
