CREATE TABLE [Items].[ArmorDetail]
(
	[Id]					INT				IDENTITY(1,1),
	[Type]					VARCHAR(100)	NOT NULL,
	[WeightClass]			VARCHAR(100)	NOT NULL,
	[Defense]				INT				NULL,
	[InfixUpgradeId]		INT				NULL,
	[SuffixItemId]			INT				NULL, -- id references anet api, not a local table.
	[SecondarySuffixItemId]	VARCHAR(100)	NULL, -- id references anet api
	[StatChoices]			VARCHAR(MAX)	NULL, -- comma separated ints
	CONSTRAINT [PK_Items_ArmorDetail] PRIMARY KEY ([Id]),
	CONSTRAINT [FK_ArmorDetail_InfixUpgrade] FOREIGN KEY ([InfixUpgradeId]) REFERENCES [Items].[InfixUpgrade] ([Id])
)
