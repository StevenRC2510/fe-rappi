/**
 *
 * @param array: Array of elements to update.
 * @param newItem: New item to replace in array.
 * @param key: Item's key to match with the prev version of itself.
 *             By default it's 'id'
 */
export function expanded(db: any[] = []) {
  const newArray = db.map((category: any) => {
    category.expanded = false;
    if (category.sublevels) {
      expanded(category.sublevels);
    }
    return { ...category };
  });
  return newArray;
}
