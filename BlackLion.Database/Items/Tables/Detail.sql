CREATE TABLE [Items].[Detail]
(
	[Id]						INT			IDENTITY(1,1),
	-- Will contain one of these Ids.
	[ArmorDetailId]				INT			NULL,
	[BackItemDetailId]			INT			NULL,
	[BagDetailId]				INT			NULL,
	[ConsumableDetailId]		INT			NULL,
	[ContainerDetailId]			INT			NULL,
	[GatheringToolDetailId]		INT			NULL,
	[GizmoDetailId]				INT			NULL,
    CONSTRAINT [PK_Items_Detail] PRIMARY KEY ([Id]),
	CONSTRAINT [FK_Detail_ArmorDetail] FOREIGN KEY ([ArmorDetailId]) REFERENCES [Items].[ArmorDetail] ([Id]),
	CONSTRAINT [FK_Detail_BackItemDetail] FOREIGN KEY ([BackItemDetailId]) REFERENCES [Items].[BackItemDetail] ([Id]),
	CONSTRAINT [FK_Detail_BagDetail] FOREIGN KEY ([BagDetailId]) REFERENCES [Items].[BagDetail] ([Id]),
	CONSTRAINT [FK_Detail_ConsumableDetail] FOREIGN KEY ([ConsumableDetailId]) REFERENCES [Items].[ConsumableDetail] ([Id]), 
    CONSTRAINT [FK_Detail_ContainerDetail] FOREIGN KEY ([ContainerDetailId]) REFERENCES [Items].[ContainerDetail] ([Id]),
	CONSTRAINT [FK_Detail_GatheringToolDetail] FOREIGN KEY ([GatheringToolDetailId]) REFERENCES [Items].[GatheringToolDetail] ([Id]),
	CONSTRAINT [FK_Detail_GizmoDetail] FOREIGN KEY ([GizmoDetailId]) REFERENCES [Items].[GizmoDetail] ([Id])
)
