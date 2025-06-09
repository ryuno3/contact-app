export interface ContactRequestBody {
  type: string;
  params: {
    name: string;
    email: string;
    content: string;
  };
}

export interface ContactResponse {
  id: string;
  name: string;
  email: string;
  content: string;
  createdAt: Date;
  status: "success" | "error" | "noData";
  errors?: {
    name?: string;
    email?: string;
    content?: string;
    form?: string;
  };
  isSubmitting?: boolean;
}
