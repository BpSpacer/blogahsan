export const structure = (S: any) =>
  S.list()
    .title('Content')
    .items(S.documentTypeListItems())
