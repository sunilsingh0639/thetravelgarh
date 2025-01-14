import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-pdf',
  imports: [CommonModule, FormsModule],
  templateUrl: './pdf.component.html',
  styleUrl: './pdf.component.scss'
})
export class PdfComponent {
  readonly IMAGE_WIDTH = 800;
  readonly IMAGE_HEIGHT = 600;

  tourData = {
    departure: '',
    destination: '',
    departureDate: '',
    totalDays: null,
    numTravelers: null,
    numRooms: null
  };

  tourCompanyLogo = {
    src: 'assets/images/slider-1.jpg',
    width: this.IMAGE_WIDTH,
    height: this.IMAGE_HEIGHT
  };

  destinationImages = [
    { src: 'assets/images/slider-1.jpg', width: this.IMAGE_WIDTH, height: this.IMAGE_HEIGHT },
    { src: 'assets/images/slider-4.jpg', width: this.IMAGE_WIDTH, height: this.IMAGE_HEIGHT },
    { src: 'assets/images/slider-5.jpg', width: this.IMAGE_WIDTH, height: this.IMAGE_HEIGHT }
  ];

  onSubmit() {
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    // Add text content
    pdf.setFontSize(16);
    pdf.text('Tour Package Details', 20, 20);
    
    pdf.setFontSize(12);
    pdf.text(`Departure: ${this.tourData.departure}`, 20, 40);
    pdf.text(`Destination: ${this.tourData.destination}`, 20, 50);
    pdf.text(`Departure Date: ${this.tourData.departureDate}`, 20, 60);
    pdf.text(`Total Days: ${this.tourData.totalDays}`, 20, 70);
    pdf.text(`Number of Travelers: ${this.tourData.numTravelers}`, 20, 80);
    pdf.text(`Number of Rooms: ${this.tourData.numRooms}`, 20, 90);

    // Add company logo
    let yPosition = 110;
    pdf.addImage(this.tourCompanyLogo.src, 'JPEG', 20, yPosition, 80, 60);
    
    // Add destination images
    yPosition += 70;
    this.destinationImages.forEach((image, index) => {
      if (yPosition > 250) {  // Add new page if not enough space
        pdf.addPage();
        yPosition = 20;
      }
      pdf.addImage(image.src, 'JPEG', 20, yPosition, 80, 60);
      yPosition += 70;
    });

    pdf.save('tour-package.pdf');
  }
}
