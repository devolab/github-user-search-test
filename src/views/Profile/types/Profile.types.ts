export interface IRepo {
  id: number;
  name: string;
  description: string;
  response: {
    data: []
    headers: string
  }
  svn_url: string
};