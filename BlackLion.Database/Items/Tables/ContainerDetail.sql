CREATE TABLE [Items].[ContainerDetail]
(
	[Id]		INT				IDENTITY(1,1),
	[Type]		VARCHAR(100)	NOT NULL,
	CONSTRAINT [PK_Items_ContainerDetail] PRIMARY KEY ([Id])
)
