// Background
var pattern = Trianglify({
  variance: 0.8,
  cell_size: 30,
  x_colors: "GnBu"
});
pattern.canvas(document.getElementById('background'));