import React from 'react';
import jsPDF from 'jspdf';

function PruebaPdf() {
  let dato1 = "DARI";
  let dato2 = 19;

  const HandlerGeneratePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text("ID de Renta: ", 10, 10);
    doc.setFont('helvetica', 'normal');
    doc.text("HHHHHHH", 50, 10);
    doc.text(`Nombre: ${dato1} Edad: ${dato2}`, 10, 20);
    doc.save("mi_pdf.pdf");
  };

  return (
    <>
      <h1>Titulo Genera tu pdf</h1>
      <p>Los datos del pdf son </p>
      <p>nombre: Dari edad: 19</p>
      <button onClick={HandlerGeneratePDF}>Generar PDF</button>
    </>
  );
}

export default PruebaPdf;
