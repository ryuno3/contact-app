export interface ContactRequestBody {
  type: string;
  params: {
    name: string;
    email: string;
    content: string;
  };
}
