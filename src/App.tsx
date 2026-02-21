import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import type { Artwork, ApiResponse } from "./types";

function App() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [page, setPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);

  // PrimeReact selection
  const [selectedRows, setSelectedRows] = useState<Artwork[]>([]);
  const [customCount, setCustomCount] = useState("");

  const fetchArtworks = async (pageNum: number) => {
    try {
      const res = await fetch(
        `https://api.artic.edu/api/v1/artworks?page=${pageNum}`
      );
      const data: ApiResponse = await res.json();

      setArtworks(data.data);
      setTotalRecords(data.pagination.total);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchArtworks(page);
  }, [page]);

  // select all current page
  const selectAllCurrentPage = () => {
    setSelectedRows((prev) => {
      const map = new Map(prev.map((item) => [item.id, item]));
      artworks.forEach((a) => map.set(a.id, a));
      return Array.from(map.values());
    });
  };

  // deselect all current page
  const deselectAllCurrentPage = () => {
    setSelectedRows((prev) => prev.filter((row) => !artworks.find(a => a.id === row.id)));
  };

  // custom N selection
  const handleCustomSelect = () => {
    const count = parseInt(customCount);
    if (!count || count <= 0) return;

    setSelectedRows((prev) => {
      const map = new Map(prev.map((item) => [item.id, item]));
      artworks.slice(0, count).forEach((a) => map.set(a.id, a));
      return Array.from(map.values());
    });

    setCustomCount("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Art Institute Artworks</h2>

      <p>Selected: {selectedRows.length} rows</p>

      {/* select buttons */}
      <div style={{ marginBottom: "10px" }}>
        <button onClick={selectAllCurrentPage}>Select All</button>
        <button onClick={deselectAllCurrentPage} style={{ marginLeft: "10px" }}>
          Deselect All
        </button>
      </div>

      {/* custom selection */}
      <div style={{ marginBottom: "10px" }}>
        <input
          type="number"
          placeholder="Select N rows"
          value={customCount}
          onChange={(e) => setCustomCount(e.target.value)}
        />
        <button onClick={handleCustomSelect} style={{ marginLeft: "10px" }}>
          Apply
        </button>
      </div>

      <DataTable
        value={artworks}
        paginator
        rows={12}
        totalRecords={totalRecords}
        lazy
        first={(page - 1) * 12}
        onPage={(e) => setPage((e.page ?? 0) + 1)}
        responsiveLayout="scroll"
        selection={selectedRows}
        onSelectionChange={(e) => setSelectedRows(e.value as Artwork[])}
        dataKey="id"
        selectionMode="multiple" 
      >
        <Column selectionMode="multiple" headerStyle={{ width: "3em" }} />
        <Column field="title" header="Title" />
        <Column field="place_of_origin" header="Origin" />
        <Column field="artist_display" header="Artist" />
        <Column field="inscriptions" header="Inscriptions" />
        <Column field="date_start" header="Start" />
        <Column field="date_end" header="End" />
      </DataTable>
    </div>
  );
}

export default App;