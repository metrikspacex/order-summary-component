import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  selector: "app-order-summary",
  standalone: true,
  styleUrls: ["./order-summary.component.scss"],
  template: `
    <div class="order-summary">
      <img alt="" src="../../assets/images/illustration-hero.svg" />
      <div class="body">
        <h1>Order Summary</h1>
        <p>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div class="plan">
          <img alt="" src="../../assets/images/icon-music.svg" />
          <div class="stack">
            <h1>Annual Plan</h1>
            <h2>$59.99/year</h2>
          </div>
          <a href="#">Change</a>
        </div>
        <button>Proceed to Payment</button>
        <h2>Cancel Order</h2>
      </div>
    </div>
  `,
})
export class OrderSummaryComponent {}
