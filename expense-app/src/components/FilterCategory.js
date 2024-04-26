
const FilterCategory = () => {
  return (
    <form>
      <label>Filter by category</label>
      <select>
        <option value="" disabled selected>All the categories</option>
          <option>Groceries</option>
          <option>Utilities</option>
          <option>Entertainment</option>
      </select>
      <button>Filter</button>
    </form>
  )
}
export default FilterCategory;
