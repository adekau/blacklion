CREATE TYPE [Items].[ArmorDetail] AS TABLE
(
	[Type]					VARCHAR(100)	NULL,
	[WeightClass]			VARCHAR(100)	NULL,
	[Defense]				INT				NULL,
	[InfixUpgradeId]		INT				NULL,
	[SuffixItemId]			INT				NULL, -- id references anet api, not a local table.
	[SecondarySuffixItemId]	VARCHAR(100)	NULL, -- id references anet api
	[StatChoices]			VARCHAR(MAX)	NULL  -- comma separated ints
)
