import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { OrderSummaryComponent } from "src/components/order-summary/order-summary.component";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, OrderSummaryComponent],
  selector: "app-home",
  standalone: true,
  styleUrls: ["./home.component.scss"],
  template: `<app-order-summary />`,
})
export class HomeComponent {}
