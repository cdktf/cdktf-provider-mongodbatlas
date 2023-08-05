/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/cloud_provider_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudProviderAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/cloud_provider_access#iam_assumed_role_arn CloudProviderAccess#iam_assumed_role_arn}
  */
  readonly iamAssumedRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/cloud_provider_access#id CloudProviderAccess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/cloud_provider_access#project_id CloudProviderAccess#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/cloud_provider_access#provider_name CloudProviderAccess#provider_name}
  */
  readonly providerName: string;
}
export interface CloudProviderAccessFeatureUsages {
}

export function cloudProviderAccessFeatureUsagesToTerraform(struct?: CloudProviderAccessFeatureUsages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class CloudProviderAccessFeatureUsagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProviderAccessFeatureUsages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProviderAccessFeatureUsages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // feature_id - computed: true, optional: false, required: false
  private _featureId = new cdktf.StringMap(this, "feature_id");
  public get featureId() {
    return this._featureId;
  }

  // feature_type - computed: true, optional: false, required: false
  public get featureType() {
    return this.getStringAttribute('feature_type');
  }
}

export class CloudProviderAccessFeatureUsagesList extends cdktf.ComplexList {

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
  public get(index: number): CloudProviderAccessFeatureUsagesOutputReference {
    return new CloudProviderAccessFeatureUsagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/cloud_provider_access mongodbatlas_cloud_provider_access}
*/
export class CloudProviderAccess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_cloud_provider_access";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/resources/cloud_provider_access mongodbatlas_cloud_provider_access} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudProviderAccessConfig
  */
  public constructor(scope: Construct, id: string, config: CloudProviderAccessConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_cloud_provider_access',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.11.0',
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
    this._iamAssumedRoleArn = config.iamAssumedRoleArn;
    this._id = config.id;
    this._projectId = config.projectId;
    this._providerName = config.providerName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // atlas_assumed_role_external_id - computed: true, optional: false, required: false
  public get atlasAssumedRoleExternalId() {
    return this.getStringAttribute('atlas_assumed_role_external_id');
  }

  // atlas_aws_account_arn - computed: true, optional: false, required: false
  public get atlasAwsAccountArn() {
    return this.getStringAttribute('atlas_aws_account_arn');
  }

  // authorized_date - computed: true, optional: false, required: false
  public get authorizedDate() {
    return this.getStringAttribute('authorized_date');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // feature_usages - computed: true, optional: false, required: false
  private _featureUsages = new CloudProviderAccessFeatureUsagesList(this, "feature_usages", false);
  public get featureUsages() {
    return this._featureUsages;
  }

  // iam_assumed_role_arn - computed: false, optional: true, required: false
  private _iamAssumedRoleArn?: string; 
  public get iamAssumedRoleArn() {
    return this.getStringAttribute('iam_assumed_role_arn');
  }
  public set iamAssumedRoleArn(value: string) {
    this._iamAssumedRoleArn = value;
  }
  public resetIamAssumedRoleArn() {
    this._iamAssumedRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamAssumedRoleArnInput() {
    return this._iamAssumedRoleArn;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // provider_name - computed: false, optional: false, required: true
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }

  // role_id - computed: true, optional: false, required: false
  public get roleId() {
    return this.getStringAttribute('role_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      iam_assumed_role_arn: cdktf.stringToTerraform(this._iamAssumedRoleArn),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      provider_name: cdktf.stringToTerraform(this._providerName),
    };
  }
}
