
export class DashboardService {
  private dashboard;

  getDashboard(): any {
    return this.dashboard;
  }

  setDashboard(d: any): void {
    this.dashboard = d;
  }
}
