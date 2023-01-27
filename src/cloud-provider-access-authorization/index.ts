// https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_access_authorization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudProviderAccessAuthorizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_access_authorization#id CloudProviderAccessAuthorization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_access_authorization#project_id CloudProviderAccessAuthorization#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_access_authorization#role_id CloudProviderAccessAuthorization#role_id}
  */
  readonly roleId: string;
  /**
  * aws block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_access_authorization#aws CloudProviderAccessAuthorization#aws}
  */
  readonly aws?: CloudProviderAccessAuthorizationAws;
}
export interface CloudProviderAccessAuthorizationFeatureUsages {
}

export function cloudProviderAccessAuthorizationFeatureUsagesToTerraform(struct?: CloudProviderAccessAuthorizationFeatureUsages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class CloudProviderAccessAuthorizationFeatureUsagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProviderAccessAuthorizationFeatureUsages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProviderAccessAuthorizationFeatureUsages | undefined) {
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

export class CloudProviderAccessAuthorizationFeatureUsagesList extends cdktf.ComplexList {

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
  public get(index: number): CloudProviderAccessAuthorizationFeatureUsagesOutputReference {
    return new CloudProviderAccessAuthorizationFeatureUsagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudProviderAccessAuthorizationAws {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_access_authorization#iam_assumed_role_arn CloudProviderAccessAuthorization#iam_assumed_role_arn}
  */
  readonly iamAssumedRoleArn: string;
}

export function cloudProviderAccessAuthorizationAwsToTerraform(struct?: CloudProviderAccessAuthorizationAwsOutputReference | CloudProviderAccessAuthorizationAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iam_assumed_role_arn: cdktf.stringToTerraform(struct!.iamAssumedRoleArn),
  }
}

export class CloudProviderAccessAuthorizationAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudProviderAccessAuthorizationAws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamAssumedRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamAssumedRoleArn = this._iamAssumedRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProviderAccessAuthorizationAws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iamAssumedRoleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iamAssumedRoleArn = value.iamAssumedRoleArn;
    }
  }

  // iam_assumed_role_arn - computed: false, optional: false, required: true
  private _iamAssumedRoleArn?: string; 
  public get iamAssumedRoleArn() {
    return this.getStringAttribute('iam_assumed_role_arn');
  }
  public set iamAssumedRoleArn(value: string) {
    this._iamAssumedRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamAssumedRoleArnInput() {
    return this._iamAssumedRoleArn;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_access_authorization mongodbatlas_cloud_provider_access_authorization}
*/
export class CloudProviderAccessAuthorization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_cloud_provider_access_authorization";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_access_authorization mongodbatlas_cloud_provider_access_authorization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudProviderAccessAuthorizationConfig
  */
  public constructor(scope: Construct, id: string, config: CloudProviderAccessAuthorizationConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_cloud_provider_access_authorization',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.8.0',
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
    this._id = config.id;
    this._projectId = config.projectId;
    this._roleId = config.roleId;
    this._aws.internalValue = config.aws;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorized_date - computed: true, optional: false, required: false
  public get authorizedDate() {
    return this.getStringAttribute('authorized_date');
  }

  // feature_usages - computed: true, optional: false, required: false
  private _featureUsages = new CloudProviderAccessAuthorizationFeatureUsagesList(this, "feature_usages", false);
  public get featureUsages() {
    return this._featureUsages;
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

  // role_id - computed: false, optional: false, required: true
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new CloudProviderAccessAuthorizationAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: CloudProviderAccessAuthorizationAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      role_id: cdktf.stringToTerraform(this._roleId),
      aws: cloudProviderAccessAuthorizationAwsToTerraform(this._aws.internalValue),
    };
  }
}
