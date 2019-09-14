CREATE TYPE [Items].[ConsumableDetail] AS TABLE
(
	[Type]				VARCHAR(100)	NULL,
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
	[SkinIds]			VARCHAR(MAX)	NULL
)
