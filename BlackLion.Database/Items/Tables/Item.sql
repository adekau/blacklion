CREATE TABLE [Items].[Item]
(
	[Id]			INT					IDENTITY(1,1), -- local db id
	[ItemId]		INT					NOT NULL, -- the gw2 database id
	[ChatLink]		VARCHAR(100)		NULL,
	[Name]			VARCHAR(255)		NOT NULL,
	[Icon]			VARCHAR(MAX)		NULL,
	[Description]	VARCHAR(MAX)		NULL,
	[Type]			VARCHAR(100)		NOT NULL,
	[Rarity]		VARCHAR(100)		NOT NULL,
	[Level]			INT					NULL,
	[VendorValue]	INT					NULL,
	[DefaultSkin]	INT					NULL,
	[Flags]			VARCHAR(MAX)		NULL,
	[GameTypes]		VARCHAR(MAX)		NULL,
	[Restrictions]	VARCHAR(MAX)		NULL,
	[DetailsId]		INT					NULL,
	CONSTRAINT [PK_Items_Item] PRIMARY KEY ([Id]),
	CONSTRAINT [FK_Item_Detail] FOREIGN KEY ([DetailsId]) REFERENCES [Items].[Detail] ([Id])
)
