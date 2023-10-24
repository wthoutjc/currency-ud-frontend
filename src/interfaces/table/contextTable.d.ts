export interface ContextTable {
  update: {
    enabled: boolean;
    param?: string;
  };
  delete: {
    enabled: boolean;
    param?: string;
  };
  read: {
    enabled: boolean;
    param?: string;
    category?: string;
  };
}
