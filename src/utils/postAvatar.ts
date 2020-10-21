import Avatar from '../types/Avatar';

export default async (avatar: Avatar) => {
  return new Promise<boolean>(resolve => {
    setTimeout(() => resolve(!!avatar), 1000);
  });
};
