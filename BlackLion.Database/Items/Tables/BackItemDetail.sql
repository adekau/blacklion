CREATE TABLE [Items].[BackItemDetail]
(
	[Id]					INT				IDENTITY(1,1),
	[InfixUpgradeId]		INT				NULL,
	[SuffixItemId]			INT				NULL,
	[SecondarySuffixItemId]	INT				NULL,
	[StatChoices]			VARCHAR(MAX)	NULL,
	CONSTRAINT [PK_Items_BackItemDetail] PRIMARY KEY ([Id]),
	CONSTRAINT [FK_BackItemDetail_InfixUpgrade] FOREIGN KEY ([InfixUpgradeId]) REFERENCES [Items].[InfixUpgrade] ([Id])
)
