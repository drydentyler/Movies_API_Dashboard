USE [MotionPictures]
GO
/****** Object:  Table [dbo].[directors_movies]    Script Date: 6/2/2023 4:48:01 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[directors_movies](
	[directorId] [int] NOT NULL,
	[movieId] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MotionPictureDirectors]    Script Date: 6/2/2023 4:48:01 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MotionPictureDirectors](
	[DirectorId] [int] NOT NULL,
	[FirstName] [nvarchar](50) NOT NULL,
	[LastName] [nvarchar](500) NULL,
	[BirthYear] [int] NOT NULL,
 CONSTRAINT [PK_MotionPictureDirectors] PRIMARY KEY CLUSTERED 
(
	[DirectorId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MotionPictures]    Script Date: 6/2/2023 4:48:01 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MotionPictures](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](500) NULL,
	[Release Year] [int] NOT NULL,
	[AcademyAward] [bit] NOT NULL,
 CONSTRAINT [PK__MotionPi__3214EC271E3C6F85] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[directors_movies] ([directorId], [movieId]) VALUES (1, 1)
INSERT [dbo].[directors_movies] ([directorId], [movieId]) VALUES (2, 3)
INSERT [dbo].[directors_movies] ([directorId], [movieId]) VALUES (5, 4)
INSERT [dbo].[directors_movies] ([directorId], [movieId]) VALUES (6, 5)
INSERT [dbo].[directors_movies] ([directorId], [movieId]) VALUES (3, 6)
INSERT [dbo].[directors_movies] ([directorId], [movieId]) VALUES (4, 1)
GO
INSERT [dbo].[MotionPictureDirectors] ([DirectorId], [FirstName], [LastName], [BirthYear]) VALUES (1, N'Lana', N'Wachowski', 1965)
INSERT [dbo].[MotionPictureDirectors] ([DirectorId], [FirstName], [LastName], [BirthYear]) VALUES (2, N'Jon', N'Watts', 1981)
INSERT [dbo].[MotionPictureDirectors] ([DirectorId], [FirstName], [LastName], [BirthYear]) VALUES (3, N'Robert', N'Zemeckis', 1952)
INSERT [dbo].[MotionPictureDirectors] ([DirectorId], [FirstName], [LastName], [BirthYear]) VALUES (4, N'Lilly', N'Wachowski', 1967)
INSERT [dbo].[MotionPictureDirectors] ([DirectorId], [FirstName], [LastName], [BirthYear]) VALUES (5, N'Tim', N'Burton', 1958)
INSERT [dbo].[MotionPictureDirectors] ([DirectorId], [FirstName], [LastName], [BirthYear]) VALUES (6, N'David', N'Mickey Evans', 1962)
GO
SET IDENTITY_INSERT [dbo].[MotionPictures] ON 

INSERT [dbo].[MotionPictures] ([ID], [Name], [Description], [Release Year], [AcademyAward]) VALUES (1, N'The Matrix', N'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.', 1999, 1)
INSERT [dbo].[MotionPictures] ([ID], [Name], [Description], [Release Year], [AcademyAward]) VALUES (2, N'Snowpiercer', N'In a future where a failed climate change experiment has killed all life except for the survivors who boarded the Snowpiercer (a train that travels around the globe), a new class system emerges.', 2013, 0)
INSERT [dbo].[MotionPictures] ([ID], [Name], [Description], [Release Year], [AcademyAward]) VALUES (3, N'Spider-Man: No Way Home', N'With Spider-Man''s identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.', 2021, 0)
INSERT [dbo].[MotionPictures] ([ID], [Name], [Description], [Release Year], [AcademyAward]) VALUES (4, N'Big Fish', N'A frustrated son tries to determine the fact from fiction in his dying father''s life.', 2003, 0)
INSERT [dbo].[MotionPictures] ([ID], [Name], [Description], [Release Year], [AcademyAward]) VALUES (5, N'The Sandlot', N'In the summer of 1962, a new kid in town is taken under the wing of a young baseball prodigy and his rowdy team, resulting in many adventures.', 1993, 0)
INSERT [dbo].[MotionPictures] ([ID], [Name], [Description], [Release Year], [AcademyAward]) VALUES (6, N'Back to the Future', N'Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.', 1985, 1)
SET IDENTITY_INSERT [dbo].[MotionPictures] OFF
GO
ALTER TABLE [dbo].[directors_movies]  WITH CHECK ADD  CONSTRAINT [FK_directors_movies_MotionPictureDirectors] FOREIGN KEY([directorId])
REFERENCES [dbo].[MotionPictureDirectors] ([DirectorId])
GO
ALTER TABLE [dbo].[directors_movies] CHECK CONSTRAINT [FK_directors_movies_MotionPictureDirectors]
GO
ALTER TABLE [dbo].[directors_movies]  WITH CHECK ADD  CONSTRAINT [FK_directors_movies_MotionPictures] FOREIGN KEY([movieId])
REFERENCES [dbo].[MotionPictures] ([ID])
GO
ALTER TABLE [dbo].[directors_movies] CHECK CONSTRAINT [FK_directors_movies_MotionPictures]
GO
