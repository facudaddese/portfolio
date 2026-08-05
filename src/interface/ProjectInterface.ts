interface Tag {
  name: string;
  icon: string;
}

export interface Project {
  name: string;
  description: string;
  img: string;
  tags: Tag[];
  preview: string;
  code: string;
}
