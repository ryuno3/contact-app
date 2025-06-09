import { randomUUID } from "crypto";
import { ContactResponse } from "../../types/contact/type";

export class ContactResponseDto implements ContactResponse {
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
  message?: string;
  // フロントエンドでのフォーム送信中の状態を示すフラグ
  isSubmitting?: boolean;

  constructor(
    response: Partial<{
      name: string;
      email: string;
      content: string;
      success: boolean;
      message: string;
    }> = {}
  ) {
    this.id = randomUUID();
    this.name = response.name || "";
    this.email = response.email || "";
    this.content = response.content || "";
    this.createdAt = new Date();
    // TODO: NoDataになるパターンを設定
    this.status = response.success ? "success" : "error";
    this.errors = {
      name: response.success ? undefined : "名前は必須です",
      email: response.success ? undefined : "メールアドレスは必須です",
      content: response.success ? undefined : "内容は必須です",
    };
    this.message = response.message;
    this.isSubmitting = false;
  }
}
