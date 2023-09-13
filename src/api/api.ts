import { UserData } from "../store/store";

export function getData(): UserData[] {
  const items = { ...localStorage };

  return Object.values(items)
    .map((el): UserData => JSON.parse(el))
    .filter((el: UserData): boolean => (el.subscription ? true : false));
}

export function sendUser(id: string, user: string): void {
  localStorage.setItem(id, user);
}
