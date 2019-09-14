CREATE TABLE [Items].[GizmoDetail]
(
	[Id]				INT				IDENTITY(1,1),
	[Type]				VARCHAR(100)	NOT NULL,
	[GuildUpgradeId]	INT				NULL,
	CONSTRAINT [PK_Items_GizmoDetail] PRIMARY KEY ([Id])
)
