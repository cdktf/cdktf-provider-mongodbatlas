/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#enabled AlertConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#event_type AlertConfiguration#event_type}
  */
  readonly eventType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#project_id AlertConfiguration#project_id}
  */
  readonly projectId: string;
  /**
  * matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#matcher AlertConfiguration#matcher}
  */
  readonly matcher?: AlertConfigurationMatcher[] | cdktf.IResolvable;
  /**
  * metric_threshold_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#metric_threshold_config AlertConfiguration#metric_threshold_config}
  */
  readonly metricThresholdConfig?: AlertConfigurationMetricThresholdConfig[] | cdktf.IResolvable;
  /**
  * notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#notification AlertConfiguration#notification}
  */
  readonly notification?: AlertConfigurationNotification[] | cdktf.IResolvable;
  /**
  * threshold_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#threshold_config AlertConfiguration#threshold_config}
  */
  readonly thresholdConfig?: AlertConfigurationThresholdConfig[] | cdktf.IResolvable;
}
export interface AlertConfigurationMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#field_name AlertConfiguration#field_name}
  */
  readonly fieldName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#operator AlertConfiguration#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#value AlertConfiguration#value}
  */
  readonly value: string;
}

export function alertConfigurationMatcherToTerraform(struct?: AlertConfigurationMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function alertConfigurationMatcherToHclTerraform(struct?: AlertConfigurationMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertConfigurationMatcherOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertConfigurationMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertConfigurationMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AlertConfigurationMatcherList extends cdktf.ComplexList {
  public internalValue? : AlertConfigurationMatcher[] | cdktf.IResolvable

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
  public get(index: number): AlertConfigurationMatcherOutputReference {
    return new AlertConfigurationMatcherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertConfigurationMetricThresholdConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#metric_name AlertConfiguration#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#mode AlertConfiguration#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#operator AlertConfiguration#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#threshold AlertConfiguration#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#units AlertConfiguration#units}
  */
  readonly units?: string;
}

export function alertConfigurationMetricThresholdConfigToTerraform(struct?: AlertConfigurationMetricThresholdConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    mode: cdktf.stringToTerraform(struct!.mode),
    operator: cdktf.stringToTerraform(struct!.operator),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    units: cdktf.stringToTerraform(struct!.units),
  }
}


export function alertConfigurationMetricThresholdConfigToHclTerraform(struct?: AlertConfigurationMetricThresholdConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    units: {
      value: cdktf.stringToHclTerraform(struct!.units),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertConfigurationMetricThresholdConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertConfigurationMetricThresholdConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._units !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertConfigurationMetricThresholdConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricName = undefined;
      this._mode = undefined;
      this._operator = undefined;
      this._threshold = undefined;
      this._units = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricName = value.metricName;
      this._mode = value.mode;
      this._operator = value.operator;
      this._threshold = value.threshold;
      this._units = value.units;
    }
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // threshold - computed: true, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // units - computed: false, optional: true, required: false
  private _units?: string; 
  public get units() {
    return this.getStringAttribute('units');
  }
  public set units(value: string) {
    this._units = value;
  }
  public resetUnits() {
    this._units = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units;
  }
}

export class AlertConfigurationMetricThresholdConfigList extends cdktf.ComplexList {
  public internalValue? : AlertConfigurationMetricThresholdConfig[] | cdktf.IResolvable

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
  public get(index: number): AlertConfigurationMetricThresholdConfigOutputReference {
    return new AlertConfigurationMetricThresholdConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertConfigurationNotification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#api_token AlertConfiguration#api_token}
  */
  readonly apiToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#channel_name AlertConfiguration#channel_name}
  */
  readonly channelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#datadog_api_key AlertConfiguration#datadog_api_key}
  */
  readonly datadogApiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#datadog_region AlertConfiguration#datadog_region}
  */
  readonly datadogRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#delay_min AlertConfiguration#delay_min}
  */
  readonly delayMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#email_address AlertConfiguration#email_address}
  */
  readonly emailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#email_enabled AlertConfiguration#email_enabled}
  */
  readonly emailEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#integration_id AlertConfiguration#integration_id}
  */
  readonly integrationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#interval_min AlertConfiguration#interval_min}
  */
  readonly intervalMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#microsoft_teams_webhook_url AlertConfiguration#microsoft_teams_webhook_url}
  */
  readonly microsoftTeamsWebhookUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#mobile_number AlertConfiguration#mobile_number}
  */
  readonly mobileNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#notifier_id AlertConfiguration#notifier_id}
  */
  readonly notifierId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#ops_genie_api_key AlertConfiguration#ops_genie_api_key}
  */
  readonly opsGenieApiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#ops_genie_region AlertConfiguration#ops_genie_region}
  */
  readonly opsGenieRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#roles AlertConfiguration#roles}
  */
  readonly roles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#service_key AlertConfiguration#service_key}
  */
  readonly serviceKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#sms_enabled AlertConfiguration#sms_enabled}
  */
  readonly smsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#team_id AlertConfiguration#team_id}
  */
  readonly teamId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#type_name AlertConfiguration#type_name}
  */
  readonly typeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#username AlertConfiguration#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#victor_ops_api_key AlertConfiguration#victor_ops_api_key}
  */
  readonly victorOpsApiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#victor_ops_routing_key AlertConfiguration#victor_ops_routing_key}
  */
  readonly victorOpsRoutingKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#webhook_secret AlertConfiguration#webhook_secret}
  */
  readonly webhookSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#webhook_url AlertConfiguration#webhook_url}
  */
  readonly webhookUrl?: string;
}

export function alertConfigurationNotificationToTerraform(struct?: AlertConfigurationNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_token: cdktf.stringToTerraform(struct!.apiToken),
    channel_name: cdktf.stringToTerraform(struct!.channelName),
    datadog_api_key: cdktf.stringToTerraform(struct!.datadogApiKey),
    datadog_region: cdktf.stringToTerraform(struct!.datadogRegion),
    delay_min: cdktf.numberToTerraform(struct!.delayMin),
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    email_enabled: cdktf.booleanToTerraform(struct!.emailEnabled),
    integration_id: cdktf.stringToTerraform(struct!.integrationId),
    interval_min: cdktf.numberToTerraform(struct!.intervalMin),
    microsoft_teams_webhook_url: cdktf.stringToTerraform(struct!.microsoftTeamsWebhookUrl),
    mobile_number: cdktf.stringToTerraform(struct!.mobileNumber),
    notifier_id: cdktf.stringToTerraform(struct!.notifierId),
    ops_genie_api_key: cdktf.stringToTerraform(struct!.opsGenieApiKey),
    ops_genie_region: cdktf.stringToTerraform(struct!.opsGenieRegion),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    service_key: cdktf.stringToTerraform(struct!.serviceKey),
    sms_enabled: cdktf.booleanToTerraform(struct!.smsEnabled),
    team_id: cdktf.stringToTerraform(struct!.teamId),
    type_name: cdktf.stringToTerraform(struct!.typeName),
    username: cdktf.stringToTerraform(struct!.username),
    victor_ops_api_key: cdktf.stringToTerraform(struct!.victorOpsApiKey),
    victor_ops_routing_key: cdktf.stringToTerraform(struct!.victorOpsRoutingKey),
    webhook_secret: cdktf.stringToTerraform(struct!.webhookSecret),
    webhook_url: cdktf.stringToTerraform(struct!.webhookUrl),
  }
}


export function alertConfigurationNotificationToHclTerraform(struct?: AlertConfigurationNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_token: {
      value: cdktf.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel_name: {
      value: cdktf.stringToHclTerraform(struct!.channelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datadog_api_key: {
      value: cdktf.stringToHclTerraform(struct!.datadogApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datadog_region: {
      value: cdktf.stringToHclTerraform(struct!.datadogRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delay_min: {
      value: cdktf.numberToHclTerraform(struct!.delayMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    email_address: {
      value: cdktf.stringToHclTerraform(struct!.emailAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.emailEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    integration_id: {
      value: cdktf.stringToHclTerraform(struct!.integrationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval_min: {
      value: cdktf.numberToHclTerraform(struct!.intervalMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    microsoft_teams_webhook_url: {
      value: cdktf.stringToHclTerraform(struct!.microsoftTeamsWebhookUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mobile_number: {
      value: cdktf.stringToHclTerraform(struct!.mobileNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notifier_id: {
      value: cdktf.stringToHclTerraform(struct!.notifierId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ops_genie_api_key: {
      value: cdktf.stringToHclTerraform(struct!.opsGenieApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ops_genie_region: {
      value: cdktf.stringToHclTerraform(struct!.opsGenieRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_key: {
      value: cdktf.stringToHclTerraform(struct!.serviceKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.smsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    team_id: {
      value: cdktf.stringToHclTerraform(struct!.teamId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_name: {
      value: cdktf.stringToHclTerraform(struct!.typeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    victor_ops_api_key: {
      value: cdktf.stringToHclTerraform(struct!.victorOpsApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    victor_ops_routing_key: {
      value: cdktf.stringToHclTerraform(struct!.victorOpsRoutingKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook_secret: {
      value: cdktf.stringToHclTerraform(struct!.webhookSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook_url: {
      value: cdktf.stringToHclTerraform(struct!.webhookUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertConfigurationNotificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertConfigurationNotification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._channelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelName = this._channelName;
    }
    if (this._datadogApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadogApiKey = this._datadogApiKey;
    }
    if (this._datadogRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadogRegion = this._datadogRegion;
    }
    if (this._delayMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayMin = this._delayMin;
    }
    if (this._emailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddress = this._emailAddress;
    }
    if (this._emailEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailEnabled = this._emailEnabled;
    }
    if (this._integrationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationId = this._integrationId;
    }
    if (this._intervalMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalMin = this._intervalMin;
    }
    if (this._microsoftTeamsWebhookUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.microsoftTeamsWebhookUrl = this._microsoftTeamsWebhookUrl;
    }
    if (this._mobileNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobileNumber = this._mobileNumber;
    }
    if (this._notifierId !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifierId = this._notifierId;
    }
    if (this._opsGenieApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.opsGenieApiKey = this._opsGenieApiKey;
    }
    if (this._opsGenieRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.opsGenieRegion = this._opsGenieRegion;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._serviceKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceKey = this._serviceKey;
    }
    if (this._smsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsEnabled = this._smsEnabled;
    }
    if (this._teamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamId = this._teamId;
    }
    if (this._typeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeName = this._typeName;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._victorOpsApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.victorOpsApiKey = this._victorOpsApiKey;
    }
    if (this._victorOpsRoutingKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.victorOpsRoutingKey = this._victorOpsRoutingKey;
    }
    if (this._webhookSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookSecret = this._webhookSecret;
    }
    if (this._webhookUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookUrl = this._webhookUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertConfigurationNotification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiToken = undefined;
      this._channelName = undefined;
      this._datadogApiKey = undefined;
      this._datadogRegion = undefined;
      this._delayMin = undefined;
      this._emailAddress = undefined;
      this._emailEnabled = undefined;
      this._integrationId = undefined;
      this._intervalMin = undefined;
      this._microsoftTeamsWebhookUrl = undefined;
      this._mobileNumber = undefined;
      this._notifierId = undefined;
      this._opsGenieApiKey = undefined;
      this._opsGenieRegion = undefined;
      this._roles = undefined;
      this._serviceKey = undefined;
      this._smsEnabled = undefined;
      this._teamId = undefined;
      this._typeName = undefined;
      this._username = undefined;
      this._victorOpsApiKey = undefined;
      this._victorOpsRoutingKey = undefined;
      this._webhookSecret = undefined;
      this._webhookUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiToken = value.apiToken;
      this._channelName = value.channelName;
      this._datadogApiKey = value.datadogApiKey;
      this._datadogRegion = value.datadogRegion;
      this._delayMin = value.delayMin;
      this._emailAddress = value.emailAddress;
      this._emailEnabled = value.emailEnabled;
      this._integrationId = value.integrationId;
      this._intervalMin = value.intervalMin;
      this._microsoftTeamsWebhookUrl = value.microsoftTeamsWebhookUrl;
      this._mobileNumber = value.mobileNumber;
      this._notifierId = value.notifierId;
      this._opsGenieApiKey = value.opsGenieApiKey;
      this._opsGenieRegion = value.opsGenieRegion;
      this._roles = value.roles;
      this._serviceKey = value.serviceKey;
      this._smsEnabled = value.smsEnabled;
      this._teamId = value.teamId;
      this._typeName = value.typeName;
      this._username = value.username;
      this._victorOpsApiKey = value.victorOpsApiKey;
      this._victorOpsRoutingKey = value.victorOpsRoutingKey;
      this._webhookSecret = value.webhookSecret;
      this._webhookUrl = value.webhookUrl;
    }
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // channel_name - computed: false, optional: true, required: false
  private _channelName?: string; 
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }
  public set channelName(value: string) {
    this._channelName = value;
  }
  public resetChannelName() {
    this._channelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelNameInput() {
    return this._channelName;
  }

  // datadog_api_key - computed: false, optional: true, required: false
  private _datadogApiKey?: string; 
  public get datadogApiKey() {
    return this.getStringAttribute('datadog_api_key');
  }
  public set datadogApiKey(value: string) {
    this._datadogApiKey = value;
  }
  public resetDatadogApiKey() {
    this._datadogApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogApiKeyInput() {
    return this._datadogApiKey;
  }

  // datadog_region - computed: false, optional: true, required: false
  private _datadogRegion?: string; 
  public get datadogRegion() {
    return this.getStringAttribute('datadog_region');
  }
  public set datadogRegion(value: string) {
    this._datadogRegion = value;
  }
  public resetDatadogRegion() {
    this._datadogRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogRegionInput() {
    return this._datadogRegion;
  }

  // delay_min - computed: true, optional: true, required: false
  private _delayMin?: number; 
  public get delayMin() {
    return this.getNumberAttribute('delay_min');
  }
  public set delayMin(value: number) {
    this._delayMin = value;
  }
  public resetDelayMin() {
    this._delayMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayMinInput() {
    return this._delayMin;
  }

  // email_address - computed: false, optional: true, required: false
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  public resetEmailAddress() {
    this._emailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // email_enabled - computed: true, optional: true, required: false
  private _emailEnabled?: boolean | cdktf.IResolvable; 
  public get emailEnabled() {
    return this.getBooleanAttribute('email_enabled');
  }
  public set emailEnabled(value: boolean | cdktf.IResolvable) {
    this._emailEnabled = value;
  }
  public resetEmailEnabled() {
    this._emailEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailEnabledInput() {
    return this._emailEnabled;
  }

  // integration_id - computed: false, optional: true, required: false
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  public resetIntegrationId() {
    this._integrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // interval_min - computed: true, optional: true, required: false
  private _intervalMin?: number; 
  public get intervalMin() {
    return this.getNumberAttribute('interval_min');
  }
  public set intervalMin(value: number) {
    this._intervalMin = value;
  }
  public resetIntervalMin() {
    this._intervalMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalMinInput() {
    return this._intervalMin;
  }

  // microsoft_teams_webhook_url - computed: false, optional: true, required: false
  private _microsoftTeamsWebhookUrl?: string; 
  public get microsoftTeamsWebhookUrl() {
    return this.getStringAttribute('microsoft_teams_webhook_url');
  }
  public set microsoftTeamsWebhookUrl(value: string) {
    this._microsoftTeamsWebhookUrl = value;
  }
  public resetMicrosoftTeamsWebhookUrl() {
    this._microsoftTeamsWebhookUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftTeamsWebhookUrlInput() {
    return this._microsoftTeamsWebhookUrl;
  }

  // mobile_number - computed: false, optional: true, required: false
  private _mobileNumber?: string; 
  public get mobileNumber() {
    return this.getStringAttribute('mobile_number');
  }
  public set mobileNumber(value: string) {
    this._mobileNumber = value;
  }
  public resetMobileNumber() {
    this._mobileNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileNumberInput() {
    return this._mobileNumber;
  }

  // notifier_id - computed: true, optional: true, required: false
  private _notifierId?: string; 
  public get notifierId() {
    return this.getStringAttribute('notifier_id');
  }
  public set notifierId(value: string) {
    this._notifierId = value;
  }
  public resetNotifierId() {
    this._notifierId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifierIdInput() {
    return this._notifierId;
  }

  // ops_genie_api_key - computed: false, optional: true, required: false
  private _opsGenieApiKey?: string; 
  public get opsGenieApiKey() {
    return this.getStringAttribute('ops_genie_api_key');
  }
  public set opsGenieApiKey(value: string) {
    this._opsGenieApiKey = value;
  }
  public resetOpsGenieApiKey() {
    this._opsGenieApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsGenieApiKeyInput() {
    return this._opsGenieApiKey;
  }

  // ops_genie_region - computed: false, optional: true, required: false
  private _opsGenieRegion?: string; 
  public get opsGenieRegion() {
    return this.getStringAttribute('ops_genie_region');
  }
  public set opsGenieRegion(value: string) {
    this._opsGenieRegion = value;
  }
  public resetOpsGenieRegion() {
    this._opsGenieRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsGenieRegionInput() {
    return this._opsGenieRegion;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // service_key - computed: false, optional: true, required: false
  private _serviceKey?: string; 
  public get serviceKey() {
    return this.getStringAttribute('service_key');
  }
  public set serviceKey(value: string) {
    this._serviceKey = value;
  }
  public resetServiceKey() {
    this._serviceKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceKeyInput() {
    return this._serviceKey;
  }

  // sms_enabled - computed: true, optional: true, required: false
  private _smsEnabled?: boolean | cdktf.IResolvable; 
  public get smsEnabled() {
    return this.getBooleanAttribute('sms_enabled');
  }
  public set smsEnabled(value: boolean | cdktf.IResolvable) {
    this._smsEnabled = value;
  }
  public resetSmsEnabled() {
    this._smsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsEnabledInput() {
    return this._smsEnabled;
  }

  // team_id - computed: false, optional: true, required: false
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  public resetTeamId() {
    this._teamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // team_name - computed: true, optional: false, required: false
  public get teamName() {
    return this.getStringAttribute('team_name');
  }

  // type_name - computed: false, optional: false, required: true
  private _typeName?: string; 
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // victor_ops_api_key - computed: false, optional: true, required: false
  private _victorOpsApiKey?: string; 
  public get victorOpsApiKey() {
    return this.getStringAttribute('victor_ops_api_key');
  }
  public set victorOpsApiKey(value: string) {
    this._victorOpsApiKey = value;
  }
  public resetVictorOpsApiKey() {
    this._victorOpsApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get victorOpsApiKeyInput() {
    return this._victorOpsApiKey;
  }

  // victor_ops_routing_key - computed: false, optional: true, required: false
  private _victorOpsRoutingKey?: string; 
  public get victorOpsRoutingKey() {
    return this.getStringAttribute('victor_ops_routing_key');
  }
  public set victorOpsRoutingKey(value: string) {
    this._victorOpsRoutingKey = value;
  }
  public resetVictorOpsRoutingKey() {
    this._victorOpsRoutingKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get victorOpsRoutingKeyInput() {
    return this._victorOpsRoutingKey;
  }

  // webhook_secret - computed: false, optional: true, required: false
  private _webhookSecret?: string; 
  public get webhookSecret() {
    return this.getStringAttribute('webhook_secret');
  }
  public set webhookSecret(value: string) {
    this._webhookSecret = value;
  }
  public resetWebhookSecret() {
    this._webhookSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookSecretInput() {
    return this._webhookSecret;
  }

  // webhook_url - computed: false, optional: true, required: false
  private _webhookUrl?: string; 
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
  }
  public set webhookUrl(value: string) {
    this._webhookUrl = value;
  }
  public resetWebhookUrl() {
    this._webhookUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookUrlInput() {
    return this._webhookUrl;
  }
}

export class AlertConfigurationNotificationList extends cdktf.ComplexList {
  public internalValue? : AlertConfigurationNotification[] | cdktf.IResolvable

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
  public get(index: number): AlertConfigurationNotificationOutputReference {
    return new AlertConfigurationNotificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertConfigurationThresholdConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#operator AlertConfiguration#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#threshold AlertConfiguration#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#units AlertConfiguration#units}
  */
  readonly units?: string;
}

export function alertConfigurationThresholdConfigToTerraform(struct?: AlertConfigurationThresholdConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    units: cdktf.stringToTerraform(struct!.units),
  }
}


export function alertConfigurationThresholdConfigToHclTerraform(struct?: AlertConfigurationThresholdConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    units: {
      value: cdktf.stringToHclTerraform(struct!.units),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertConfigurationThresholdConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertConfigurationThresholdConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._units !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertConfigurationThresholdConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._threshold = undefined;
      this._units = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._threshold = value.threshold;
      this._units = value.units;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // threshold - computed: true, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // units - computed: false, optional: true, required: false
  private _units?: string; 
  public get units() {
    return this.getStringAttribute('units');
  }
  public set units(value: string) {
    this._units = value;
  }
  public resetUnits() {
    this._units = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units;
  }
}

export class AlertConfigurationThresholdConfigList extends cdktf.ComplexList {
  public internalValue? : AlertConfigurationThresholdConfig[] | cdktf.IResolvable

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
  public get(index: number): AlertConfigurationThresholdConfigOutputReference {
    return new AlertConfigurationThresholdConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration mongodbatlas_alert_configuration}
*/
export class AlertConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_alert_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertConfiguration to import
  * @param importFromId The id of the existing AlertConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_alert_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration mongodbatlas_alert_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: AlertConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_alert_configuration',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.16.2',
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
    this._enabled = config.enabled;
    this._eventType = config.eventType;
    this._projectId = config.projectId;
    this._matcher.internalValue = config.matcher;
    this._metricThresholdConfig.internalValue = config.metricThresholdConfig;
    this._notification.internalValue = config.notification;
    this._thresholdConfig.internalValue = config.thresholdConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_configuration_id - computed: true, optional: false, required: false
  public get alertConfigurationId() {
    return this.getStringAttribute('alert_configuration_id');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // matcher - computed: false, optional: true, required: false
  private _matcher = new AlertConfigurationMatcherList(this, "matcher", false);
  public get matcher() {
    return this._matcher;
  }
  public putMatcher(value: AlertConfigurationMatcher[] | cdktf.IResolvable) {
    this._matcher.internalValue = value;
  }
  public resetMatcher() {
    this._matcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matcherInput() {
    return this._matcher.internalValue;
  }

  // metric_threshold_config - computed: false, optional: true, required: false
  private _metricThresholdConfig = new AlertConfigurationMetricThresholdConfigList(this, "metric_threshold_config", false);
  public get metricThresholdConfig() {
    return this._metricThresholdConfig;
  }
  public putMetricThresholdConfig(value: AlertConfigurationMetricThresholdConfig[] | cdktf.IResolvable) {
    this._metricThresholdConfig.internalValue = value;
  }
  public resetMetricThresholdConfig() {
    this._metricThresholdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricThresholdConfigInput() {
    return this._metricThresholdConfig.internalValue;
  }

  // notification - computed: false, optional: true, required: false
  private _notification = new AlertConfigurationNotificationList(this, "notification", false);
  public get notification() {
    return this._notification;
  }
  public putNotification(value: AlertConfigurationNotification[] | cdktf.IResolvable) {
    this._notification.internalValue = value;
  }
  public resetNotification() {
    this._notification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification.internalValue;
  }

  // threshold_config - computed: false, optional: true, required: false
  private _thresholdConfig = new AlertConfigurationThresholdConfigList(this, "threshold_config", false);
  public get thresholdConfig() {
    return this._thresholdConfig;
  }
  public putThresholdConfig(value: AlertConfigurationThresholdConfig[] | cdktf.IResolvable) {
    this._thresholdConfig.internalValue = value;
  }
  public resetThresholdConfig() {
    this._thresholdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdConfigInput() {
    return this._thresholdConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      event_type: cdktf.stringToTerraform(this._eventType),
      project_id: cdktf.stringToTerraform(this._projectId),
      matcher: cdktf.listMapper(alertConfigurationMatcherToTerraform, true)(this._matcher.internalValue),
      metric_threshold_config: cdktf.listMapper(alertConfigurationMetricThresholdConfigToTerraform, true)(this._metricThresholdConfig.internalValue),
      notification: cdktf.listMapper(alertConfigurationNotificationToTerraform, true)(this._notification.internalValue),
      threshold_config: cdktf.listMapper(alertConfigurationThresholdConfigToTerraform, true)(this._thresholdConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_type: {
        value: cdktf.stringToHclTerraform(this._eventType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      matcher: {
        value: cdktf.listMapperHcl(alertConfigurationMatcherToHclTerraform, true)(this._matcher.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertConfigurationMatcherList",
      },
      metric_threshold_config: {
        value: cdktf.listMapperHcl(alertConfigurationMetricThresholdConfigToHclTerraform, true)(this._metricThresholdConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertConfigurationMetricThresholdConfigList",
      },
      notification: {
        value: cdktf.listMapperHcl(alertConfigurationNotificationToHclTerraform, true)(this._notification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertConfigurationNotificationList",
      },
      threshold_config: {
        value: cdktf.listMapperHcl(alertConfigurationThresholdConfigToHclTerraform, true)(this._thresholdConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertConfigurationThresholdConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
