CREATE TABLE [Items].[BagDetail]
(
	[Id]			INT				IDENTITY(1,1),
	[Size]			INT				NOT NULL,
	[NoSellOrSort]	BIT				NOT NULL,
	CONSTRAINT [PK_Items_BagDetail] PRIMARY KEY ([Id])
)
