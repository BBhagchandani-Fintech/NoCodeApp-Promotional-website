import { DepartmentService } from "./pages/department/department.service";
import { PurchasePaidPlanService } from "./pages/purchase-paid-plan/purchase-paid-plan.service";
import { OverviewService } from "./pages/overview/overview.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Utility } from "./shared/Utility";
import { LoginComponent } from "./pages/login/login.component";
import { ForgetpasswordComponent } from "./pages/forget-password/forget-password.component";
import { HomeComponent } from "./pages/home/home.component";
import { ContactUsComponent } from "./pages/contact-us/contact-us.component";
import { FaqPopupComponent } from "./pages/contact-us/contact-us.component";
import { ConfirmPopUpComponent } from "./pages/confirm-pop-up/confirm-pop-up.component";
import { ResetPasswordComponent } from "./pages/reset-password/reset-password.component";
import { ChangePasswordComponent } from "./pages/change-password/change-password.component";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MAT_SNACK_BAR_DATA } from "@angular/material/snack-bar";
import { MatInputModule } from "@angular/material/input";
import { MatPasswordStrengthModule } from "@angular-material-extensions/password-strength";
import { MatConfirmDialogComponent } from "./shared/mat-confirm-dialog/mat-confirm-dialog.component";
import { PasswordConfirmDialogComponent } from "./shared/password-confirm-dialog/password-confirm-dialog.component";
import { AccountActivateConfirmDialogComponent } from "./shared/account-activate-confirm-dialog/account-activate-confirm-dialog.component";
import { ActiveInactiveConfirmDialogComponent } from "./shared/active-inactive-confirm-dialog/active-inactive-confirm-dialog.component";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";
import { NgxTrimDirectiveModule } from "ngx-trim-directive";
import { GlobalErrorHandler } from "src/GlobalErrorHandler";
import { EmployeesComponent } from "./pages/employees/employees.component";
import { SidenavComponent } from "./shared/sidenav/sidenav.component";
import { OfficebcpFooterComponent } from "./shared/officebcp-footer/officebcp-footer.component";
import {
  OfficeBcpHeaderComponent,
  signOut,
} from "./shared/office-bcp-header/office-bcp-header.component";
import { SignUpPopupComponent } from "./pages/home/home.component";
import { ChartsModule } from "ng2-charts";

// For scrolling inside the page
import { LoaderComponent } from "./pages/miscellaneous/loader/loader.component";
import { NgxPageScrollModule } from "ngx-page-scroll";
import { DepartmentComponent } from "./pages/department/department.component";
import { OnPremisesUsersComponent } from "./pages/on-premises-users/on-premises-users.component";
import { ImportUsersPopUpComponent } from "./pages/employees/import-users-pop-up/import-users-pop-up.component";
import { OverviewComponent } from "./pages/overview/overview.component";
import { ChangePassPopupComponent } from "./shared/office-bcp-header/office-bcp-header.component";
// import { ChangePassPopupComponent } from "./shared/office-bcp-header/office-bcp-header.component";
import { DeleteConfirmPopupComponent } from "./pages/employees/employees.component";
import { EnableDisableConfirmPopupComponent } from "./pages/employees/employees.component";
import { EditEmployeePopupComponent } from "./pages/employees/employees.component";
import { MaterialModule } from "src/material-modules";
import { DeleteConfirmationDialogComponent } from "./shared/delete-confirmation-dialog/delete-confirmation-dialog.component";
import { PurchasePaidPlanComponent } from "../app/pages/purchase-paid-plan/purchase-paid-plan.component";
import { AddRemoteUserComponent } from "./pages/add-remote-user/add-remote-user.component";
import { EditRemoteUserComponent } from "./pages/edit-remote-user/edit-remote-user.component";
import { AddDepartmentDialogComponent } from "./shared/add-department-dialog/add-department-dialog.component";
import { AppHttpInterceptor } from "./shared/http.interceptor";
import { HttpCancelService } from "./shared/httpcancel.service";
import { ManageHttpInterceptor } from "./shared/managehttp.interceptor";
import { BillingComponent } from "./pages/billing/billing.component";
import { InvoiceComponent } from "./pages/invoice/invoice.component";
import { OrganizationComponent } from "./pages/organization/organization.component";
import { AddEditOnPremisesUserPopUpComponent } from "./pages/on-premises-users/add-edit-on-premises-user-pop-up/add-edit-on-premises-user-pop-up.component";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { AddInvoiceComponent } from "./pages/add-invoice/add-invoice.component";
import { EditInvoiceItemComponent } from "./pages/edit-invoice-item/edit-invoice-item.component";
import { AddEditInvoicePopup } from "./pages/billing/billing.component";
import { HowUseServicesComponent } from "./pages/how-use-services/how-use-services.component";
import { CarouselModule } from "ngx-owl-carousel-o";
import { LoaderInterceptor } from "./shared/loading.interceptor";
import { NgCircleProgressModule } from "ng-circle-progress";
import { TrackScollDirective } from "./shared/track-scoll.directive";
import { SoftwareFilterPipe } from "./shared/softwareSearch.pipe";
import { CostExplorerComponent } from "./pages/cost-explorer/cost-explorer.component";
import { UsageInsightsComponent } from "./pages/usage-insights/usage-insights.component";
import { AddTransactionComponent } from "./pages/add-transaction/add-transaction.component";
import { EditTransactionComponent } from "./pages/edit-transaction/edit-transaction.component";
import { StaticSearchPipe } from "./shared/static-search.pipe";
import { HighlightOnFilterPipe } from "./shared/highlight-on-filter.pipe";
import { ChangeWorkingModalPopupComponent } from "./pages/overview/change-working-modal-popup/change-working-modal-popup.component";
import { SuccesfulInvoicePopupComponent } from "./shared/succesful-invoice-popup/succesful-invoice-popup.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { NgxFreshChatModule } from "ngx-freshchat";
import {
  CounterTickDown,
  FormatTimePipe,
} from "./shared/counter-tick-down/counter-tick-down.component";
import { ChatWidgetComponent } from "./shared/chat-widget/chat-widget.directive";
import { FocusElementDirective } from "./shared/focus-element.directive";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetpasswordComponent,
    HomeComponent,
    // ChangePassPopupComponent,
    MatConfirmDialogComponent,
    PasswordConfirmDialogComponent,
    AccountActivateConfirmDialogComponent,
    ActiveInactiveConfirmDialogComponent,
    ContactUsComponent,
    ConfirmPopUpComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
    LoaderComponent,
    EmployeesComponent,
    ChangePassPopupComponent,
    DeleteConfirmPopupComponent,
    EnableDisableConfirmPopupComponent,
    EditEmployeePopupComponent,
    SidenavComponent,
    OfficebcpFooterComponent,
    OfficeBcpHeaderComponent,
    FaqPopupComponent,
    SignUpPopupComponent,
    DepartmentComponent,
    OnPremisesUsersComponent,
    ImportUsersPopUpComponent,
    OverviewComponent,
    DeleteConfirmationDialogComponent,
    PurchasePaidPlanComponent,
    AddRemoteUserComponent,
    EditRemoteUserComponent,
    AddDepartmentDialogComponent,
    BillingComponent,
    InvoiceComponent,
    OrganizationComponent,
    AddEditOnPremisesUserPopUpComponent,
    AddInvoiceComponent,
    EditInvoiceItemComponent,
    AddEditInvoicePopup,
    HowUseServicesComponent,
    TrackScollDirective,
    SoftwareFilterPipe,
    CostExplorerComponent,
    UsageInsightsComponent,
    AddTransactionComponent,
    EditTransactionComponent,
    StaticSearchPipe,
    HighlightOnFilterPipe,
    ChangeWorkingModalPopupComponent,
    SuccesfulInvoicePopupComponent,
    CounterTickDown,
    FormatTimePipe,
    ChatWidgetComponent,
    FocusElementDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxFreshChatModule,
    // MatDialogModule,
    MatFormFieldModule,
    // MatIconModule,
    // MatSnackBarModule,
    MatInputModule,
    // MatSelectModule,
    MatPasswordStrengthModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgxTrimDirectiveModule,
    // MatMomentDateModule,
    // MatCheckboxModule,
    // MatSidenavModule,
    // MatTabsModule,
    // MatTableModule,
    // MatPaginator,
    // MatSort,
    // MatTableDataSource,
    // MatPaginatorModule,
    // MatSortModule,
    // SelectionModel,
    // MatExpansionModule,
    NgxPageScrollModule,
    // MatDatepickerModule,
    // MatSlideToggleModule,
    // MatMenuModule,
    // MatDatepickerModule,
    // MatSlideToggleModule,
    // MatMenuModule,
    // MatTooltipModule,
    MaterialModule,
    NgxMaterialTimepickerModule,
    ChartsModule,
    CarouselModule,
    NgCircleProgressModule.forRoot({}),
  ],
  exports: [MatButtonModule, MatInputModule],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
    {
      provide: MAT_SNACK_BAR_DATA,
      useValue: {},
    },
    Utility,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true,
    },
    OverviewService,
    PurchasePaidPlanService,
    DepartmentService,
    SoftwareFilterPipe,
    signOut,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmPopUpComponent,
    ContactUsComponent,
    PasswordConfirmDialogComponent,
    AccountActivateConfirmDialogComponent,
    ActiveInactiveConfirmDialogComponent,
    FaqPopupComponent,
    SignUpPopupComponent,
    PurchasePaidPlanComponent,
    AddRemoteUserComponent,
    EditRemoteUserComponent,
    ChangePassPopupComponent,
    DeleteConfirmPopupComponent,
    EnableDisableConfirmPopupComponent,
    EditEmployeePopupComponent,
    OnPremisesUsersComponent,
    ImportUsersPopUpComponent,
    DeleteConfirmationDialogComponent,
    AddDepartmentDialogComponent,
    MatConfirmDialogComponent,
    InvoiceComponent,
    AddEditOnPremisesUserPopUpComponent,
    BillingComponent,
    AddInvoiceComponent,
    EditInvoiceItemComponent,
    AddEditOnPremisesUserPopUpComponent,
    AddEditInvoicePopup,
    AddTransactionComponent,
    EditTransactionComponent,
    ChangeWorkingModalPopupComponent,
    SuccesfulInvoicePopupComponent,
  ],
})
export class AppModule {}
