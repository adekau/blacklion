CREATE TABLE [Items].[InfixBuff]
(
	[Id]				INT				IDENTITY(1,1),
	[SkillId]			INT				NOT NULL, -- TODO fk here?
	[Description]		VARCHAR(MAX)	NULL,
	CONSTRAINT [PK_Items_InfixBuff] PRIMARY KEY ([Id])
)
