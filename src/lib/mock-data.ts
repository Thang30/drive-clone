export type FileItem = {
  id: string;
  name: string;
  type: "file";
  size: string;
  modified: string;
  url: string;
  parent: string | null;
};

export type FolderItem = {
  id: string;
  name: string;
  type: "folder";
  contents: (FileItem | FolderItem)[];
  parent: string | null;
};

export type DriveItem = FileItem | FolderItem;

export const mockData: FolderItem = {
  id: "root-id",
  name: "Root",
  type: "folder",
  contents: [
    {
      id: "documents-id",
      name: "Documents",
      type: "folder",
      contents: [
        {
          id: "proposal-id",
          name: "Project Proposal.docx",
          type: "file",
          size: "2.3 MB",
          modified: "2023-05-15",
          url: "/files/project-proposal.docx",
          parent: "documents-id",
        },
        {
          id: "budget-id",
          name: "Budget.xlsx",
          type: "file",
          size: "1.5 MB",
          modified: "2023-05-14",
          url: "/files/budget.xlsx",
          parent: "documents-id",
        },
      ],
      parent: "root-id",
    },
    {
      id: "images-id",
      name: "Images",
      type: "folder",
      contents: [
        {
          id: "vacation-id",
          name: "Vacation.jpg",
          type: "file",
          size: "3.2 MB",
          modified: "2023-05-10",
          url: "/images/vacation.jpg",
          parent: "images-id",
        },
        {
          id: "family-id",
          name: "Family.png",
          type: "file",
          size: "2.8 MB",
          modified: "2023-05-09",
          url: "/images/family.png",
          parent: "images-id",
        },
      ],
      parent: "root-id",
    },
    {
      id: "resume-id",
      name: "Resume.pdf",
      type: "file",
      size: "500 KB",
      modified: "2023-05-13",
      url: "/files/resume.pdf",
      parent: "root-id",
    },
    {
      id: "notes-id",
      name: "Notes.txt",
      type: "file",
      size: "10 KB",
      modified: "2023-05-12",
      url: "/files/notes.txt",
      parent: "root-id",
    },
  ],
  parent: null,
};
