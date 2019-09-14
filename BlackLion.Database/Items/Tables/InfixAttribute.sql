CREATE TABLE [Items].[InfixAttribute]
(
	[Id]				INT				IDENTITY(1,1),
	[InfixUpgradeId]	INT				NOT NULL,
	[Attribute]			VARCHAR(100)	NOT NULL,
	[Modifier]			INT				NOT NULL,
	CONSTRAINT [PK_Items_InfixAttribute] PRIMARY KEY ([Id]),
	CONSTRAINT [FK_InfixAttribute_InfixUpgrade] FOREIGN KEY ([InfixUpgradeId]) REFERENCES [Items].[InfixUpgrade] ([Id])
)
