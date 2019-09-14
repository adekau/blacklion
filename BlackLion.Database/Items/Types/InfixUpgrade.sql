CREATE TYPE [Items].[InfixUpgrade] AS TABLE
(
	[ItemStatId]		INT			NULL, -- links to the Items.Stat table TODO
	[BuffId]			INT			NULL
)
