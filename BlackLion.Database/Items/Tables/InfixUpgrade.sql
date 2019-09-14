CREATE TABLE [Items].[InfixUpgrade]
(
	[Id]				INT			IDENTITY(1,1),
	[ItemStatId]		INT			NULL, -- links to the Items.Stat table TODO
	[BuffId]			INT			NULL,
	CONSTRAINT [PK_Items_InfixUpgrade] PRIMARY KEY ([Id]),
	CONSTRAINT [FK_InfixUpgrade_InfixBuff] FOREIGN KEY ([BuffId]) REFERENCES [Items].[InfixBuff] ([Id])
)
