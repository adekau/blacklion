CREATE TABLE [Items].[ConsumableDetail]
(
	[Id]				INT				IDENTITY(1,1),
	[Type]				VARCHAR(100)	NOT NULL,
	[Description]		VARCHAR(MAX)	NULL,
	[DurationMs]		INT				NULL,
	[UnlockType]		VARCHAR(100)	NULL,
	[ColorId]			INT				NULL,
	[RecipeId]			INT				NULL,
	[ExtraRecipeIds]	VARCHAR(MAX)	NULL,
	[GuildUpgradeId]	INT				NULL,
	[ApplyCount]		INT				NULL,
	[Name]				VARCHAR(100)	NULL,
	[Icon]				VARCHAR(255)	NULL,
	[SkinIds]			VARCHAR(MAX)	NULL,
	CONSTRAINT [PK_Items_ConsumableDetail] PRIMARY KEY ([Id])
)
