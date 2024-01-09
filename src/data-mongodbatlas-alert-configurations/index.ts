/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/alert_configurations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasAlertConfigurationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/alert_configurations#output_type DataMongodbatlasAlertConfigurations#output_type}
  */
  readonly outputType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/alert_configurations#project_id DataMongodbatlasAlertConfigurations#project_id}
  */
  readonly projectId: string;
  /**
  * list_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/alert_configurations#list_options DataMongodbatlasAlertConfigurations#list_options}
  */
  readonly listOptions?: DataMongodbatlasAlertConfigurationsListOptions[] | cdktf.IResolvable;
}
export interface DataMongodbatlasAlertConfigurationsResultsMatcher {
}

export function dataMongodbatlasAlertConfigurationsResultsMatcherToTerraform(struct?: DataMongodbatlasAlertConfigurationsResultsMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMongodbatlasAlertConfigurationsResultsMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAlertConfigurationsResultsMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_name - computed: true, optional: false, required: false
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataMongodbatlasAlertConfigurationsResultsMatcherList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference {
    return new DataMongodbatlasAlertConfigurationsResultsMatcherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig {
}

export function dataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigToTerraform(struct?: DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // units - computed: true, optional: false, required: false
  public get units() {
    return this.getStringAttribute('units');
  }
}

export class DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference {
    return new DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasAlertConfigurationsResultsNotification {
}

export function dataMongodbatlasAlertConfigurationsResultsNotificationToTerraform(struct?: DataMongodbatlasAlertConfigurationsResultsNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMongodbatlasAlertConfigurationsResultsNotification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAlertConfigurationsResultsNotification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_token - computed: true, optional: false, required: false
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }

  // channel_name - computed: true, optional: false, required: false
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }

  // datadog_api_key - computed: true, optional: false, required: false
  public get datadogApiKey() {
    return this.getStringAttribute('datadog_api_key');
  }

  // datadog_region - computed: true, optional: false, required: false
  public get datadogRegion() {
    return this.getStringAttribute('datadog_region');
  }

  // delay_min - computed: true, optional: false, required: false
  public get delayMin() {
    return this.getNumberAttribute('delay_min');
  }

  // email_address - computed: true, optional: false, required: false
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }

  // email_enabled - computed: true, optional: false, required: false
  public get emailEnabled() {
    return this.getBooleanAttribute('email_enabled');
  }

  // interval_min - computed: true, optional: false, required: false
  public get intervalMin() {
    return this.getNumberAttribute('interval_min');
  }

  // microsoft_teams_webhook_url - computed: true, optional: false, required: false
  public get microsoftTeamsWebhookUrl() {
    return this.getStringAttribute('microsoft_teams_webhook_url');
  }

  // mobile_number - computed: true, optional: false, required: false
  public get mobileNumber() {
    return this.getStringAttribute('mobile_number');
  }

  // notifier_id - computed: true, optional: false, required: false
  public get notifierId() {
    return this.getStringAttribute('notifier_id');
  }

  // ops_genie_api_key - computed: true, optional: false, required: false
  public get opsGenieApiKey() {
    return this.getStringAttribute('ops_genie_api_key');
  }

  // ops_genie_region - computed: true, optional: false, required: false
  public get opsGenieRegion() {
    return this.getStringAttribute('ops_genie_region');
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return this.getListAttribute('roles');
  }

  // service_key - computed: true, optional: false, required: false
  public get serviceKey() {
    return this.getStringAttribute('service_key');
  }

  // sms_enabled - computed: true, optional: false, required: false
  public get smsEnabled() {
    return this.getBooleanAttribute('sms_enabled');
  }

  // team_id - computed: true, optional: false, required: false
  public get teamId() {
    return this.getStringAttribute('team_id');
  }

  // team_name - computed: true, optional: false, required: false
  public get teamName() {
    return this.getStringAttribute('team_name');
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // victor_ops_api_key - computed: true, optional: false, required: false
  public get victorOpsApiKey() {
    return this.getStringAttribute('victor_ops_api_key');
  }

  // victor_ops_routing_key - computed: true, optional: false, required: false
  public get victorOpsRoutingKey() {
    return this.getStringAttribute('victor_ops_routing_key');
  }

  // webhook_secret - computed: true, optional: false, required: false
  public get webhookSecret() {
    return this.getStringAttribute('webhook_secret');
  }

  // webhook_url - computed: true, optional: false, required: false
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
  }
}

export class DataMongodbatlasAlertConfigurationsResultsNotificationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference {
    return new DataMongodbatlasAlertConfigurationsResultsNotificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasAlertConfigurationsResultsOutput {
}

export function dataMongodbatlasAlertConfigurationsResultsOutputToTerraform(struct?: DataMongodbatlasAlertConfigurationsResultsOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataMongodbatlasAlertConfigurationsResultsOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMongodbatlasAlertConfigurationsResultsOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAlertConfigurationsResultsOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataMongodbatlasAlertConfigurationsResultsOutputList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataMongodbatlasAlertConfigurationsResultsOutputOutputReference {
    return new DataMongodbatlasAlertConfigurationsResultsOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasAlertConfigurationsResultsThresholdConfig {
}

export function dataMongodbatlasAlertConfigurationsResultsThresholdConfigToTerraform(struct?: DataMongodbatlasAlertConfigurationsResultsThresholdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMongodbatlasAlertConfigurationsResultsThresholdConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAlertConfigurationsResultsThresholdConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // units - computed: true, optional: false, required: false
  public get units() {
    return this.getStringAttribute('units');
  }
}

export class DataMongodbatlasAlertConfigurationsResultsThresholdConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference {
    return new DataMongodbatlasAlertConfigurationsResultsThresholdConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasAlertConfigurationsResults {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/alert_configurations#alert_configuration_id DataMongodbatlasAlertConfigurations#alert_configuration_id}
  */
  readonly alertConfigurationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/alert_configurations#project_id DataMongodbatlasAlertConfigurations#project_id}
  */
  readonly projectId: string;
}

export function dataMongodbatlasAlertConfigurationsResultsToTerraform(struct?: DataMongodbatlasAlertConfigurationsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_configuration_id: cdktf.stringToTerraform(struct!.alertConfigurationId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}

export class DataMongodbatlasAlertConfigurationsResultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMongodbatlasAlertConfigurationsResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertConfigurationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertConfigurationId = this._alertConfigurationId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAlertConfigurationsResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertConfigurationId = undefined;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertConfigurationId = value.alertConfigurationId;
      this._projectId = value.projectId;
    }
  }

  // alert_configuration_id - computed: true, optional: false, required: true
  private _alertConfigurationId?: string; 
  public get alertConfigurationId() {
    return this.getStringAttribute('alert_configuration_id');
  }
  public set alertConfigurationId(value: string) {
    this._alertConfigurationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertConfigurationIdInput() {
    return this._alertConfigurationId;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // event_type - computed: true, optional: false, required: false
  public get eventType() {
    return this.getStringAttribute('event_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // matcher - computed: true, optional: false, required: false
  private _matcher = new DataMongodbatlasAlertConfigurationsResultsMatcherList(this, "matcher", false);
  public get matcher() {
    return this._matcher;
  }

  // metric_threshold_config - computed: true, optional: false, required: false
  private _metricThresholdConfig = new DataMongodbatlasAlertConfigurationsResultsMetricThresholdConfigList(this, "metric_threshold_config", false);
  public get metricThresholdConfig() {
    return this._metricThresholdConfig;
  }

  // notification - computed: true, optional: false, required: false
  private _notification = new DataMongodbatlasAlertConfigurationsResultsNotificationList(this, "notification", false);
  public get notification() {
    return this._notification;
  }

  // output - computed: true, optional: false, required: false
  private _output = new DataMongodbatlasAlertConfigurationsResultsOutputList(this, "output", false);
  public get output() {
    return this._output;
  }

  // project_id - computed: true, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // threshold_config - computed: true, optional: false, required: false
  private _thresholdConfig = new DataMongodbatlasAlertConfigurationsResultsThresholdConfigList(this, "threshold_config", false);
  public get thresholdConfig() {
    return this._thresholdConfig;
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }
}

export class DataMongodbatlasAlertConfigurationsResultsList extends cdktf.ComplexList {
  public internalValue? : DataMongodbatlasAlertConfigurationsResults[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataMongodbatlasAlertConfigurationsResultsOutputReference {
    return new DataMongodbatlasAlertConfigurationsResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasAlertConfigurationsListOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/alert_configurations#include_count DataMongodbatlasAlertConfigurations#include_count}
  */
  readonly includeCount?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/alert_configurations#items_per_page DataMongodbatlasAlertConfigurations#items_per_page}
  */
  readonly itemsPerPage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/alert_configurations#page_num DataMongodbatlasAlertConfigurations#page_num}
  */
  readonly pageNum?: number;
}

export function dataMongodbatlasAlertConfigurationsListOptionsToTerraform(struct?: DataMongodbatlasAlertConfigurationsListOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_count: cdktf.booleanToTerraform(struct!.includeCount),
    items_per_page: cdktf.numberToTerraform(struct!.itemsPerPage),
    page_num: cdktf.numberToTerraform(struct!.pageNum),
  }
}

export class DataMongodbatlasAlertConfigurationsListOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMongodbatlasAlertConfigurationsListOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeCount = this._includeCount;
    }
    if (this._itemsPerPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemsPerPage = this._itemsPerPage;
    }
    if (this._pageNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageNum = this._pageNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAlertConfigurationsListOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeCount = undefined;
      this._itemsPerPage = undefined;
      this._pageNum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeCount = value.includeCount;
      this._itemsPerPage = value.itemsPerPage;
      this._pageNum = value.pageNum;
    }
  }

  // include_count - computed: false, optional: true, required: false
  private _includeCount?: boolean | cdktf.IResolvable; 
  public get includeCount() {
    return this.getBooleanAttribute('include_count');
  }
  public set includeCount(value: boolean | cdktf.IResolvable) {
    this._includeCount = value;
  }
  public resetIncludeCount() {
    this._includeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeCountInput() {
    return this._includeCount;
  }

  // items_per_page - computed: false, optional: true, required: false
  private _itemsPerPage?: number; 
  public get itemsPerPage() {
    return this.getNumberAttribute('items_per_page');
  }
  public set itemsPerPage(value: number) {
    this._itemsPerPage = value;
  }
  public resetItemsPerPage() {
    this._itemsPerPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsPerPageInput() {
    return this._itemsPerPage;
  }

  // page_num - computed: false, optional: true, required: false
  private _pageNum?: number; 
  public get pageNum() {
    return this.getNumberAttribute('page_num');
  }
  public set pageNum(value: number) {
    this._pageNum = value;
  }
  public resetPageNum() {
    this._pageNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageNumInput() {
    return this._pageNum;
  }
}

export class DataMongodbatlasAlertConfigurationsListOptionsList extends cdktf.ComplexList {
  public internalValue? : DataMongodbatlasAlertConfigurationsListOptions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataMongodbatlasAlertConfigurationsListOptionsOutputReference {
    return new DataMongodbatlasAlertConfigurationsListOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/alert_configurations mongodbatlas_alert_configurations}
*/
export class DataMongodbatlasAlertConfigurations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_alert_configurations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMongodbatlasAlertConfigurations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMongodbatlasAlertConfigurations to import
  * @param importFromId The id of the existing DataMongodbatlasAlertConfigurations that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/alert_configurations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMongodbatlasAlertConfigurations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_alert_configurations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/alert_configurations mongodbatlas_alert_configurations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasAlertConfigurationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasAlertConfigurationsConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_alert_configurations',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.14.0',
        providerVersionConstraint: '~> 1.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._outputType = config.outputType;
    this._projectId = config.projectId;
    this._listOptions.internalValue = config.listOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // output_type - computed: false, optional: true, required: false
  private _outputType?: string[]; 
  public get outputType() {
    return this.getListAttribute('output_type');
  }
  public set outputType(value: string[]) {
    this._outputType = value;
  }
  public resetOutputType() {
    this._outputType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputTypeInput() {
    return this._outputType;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataMongodbatlasAlertConfigurationsResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // list_options - computed: false, optional: true, required: false
  private _listOptions = new DataMongodbatlasAlertConfigurationsListOptionsList(this, "list_options", false);
  public get listOptions() {
    return this._listOptions;
  }
  public putListOptions(value: DataMongodbatlasAlertConfigurationsListOptions[] | cdktf.IResolvable) {
    this._listOptions.internalValue = value;
  }
  public resetListOptions() {
    this._listOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listOptionsInput() {
    return this._listOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      output_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._outputType),
      project_id: cdktf.stringToTerraform(this._projectId),
      list_options: cdktf.listMapper(dataMongodbatlasAlertConfigurationsListOptionsToTerraform, true)(this._listOptions.internalValue),
    };
  }
}
