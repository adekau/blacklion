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
PRINT N'Creating [Items]...';


GO
CREATE SCHEMA [Items]
    AUTHORIZATION [dbo];


GO
PRINT N'Creating [Items].[Item]...';


GO
CREATE TABLE [Items].[Item] (
    [Id]          INT           IDENTITY (1, 1) NOT NULL,
    [ItemId]      INT           NOT NULL,
    [ChatLink]    VARCHAR (100) NULL,
    [Name]        VARCHAR (255) NOT NULL,
    [Icon]        VARCHAR (MAX) NULL,
    [Description] VARCHAR (MAX) NULL,
    CONSTRAINT [PK_Items] PRIMARY KEY CLUSTERED ([Id] ASC)
);


GO
PRINT N'Update complete.';


GO
