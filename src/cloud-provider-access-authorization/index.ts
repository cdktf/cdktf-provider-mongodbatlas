// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/cloud_provider_access_authorization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudProviderAccessAuthorizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/cloud_provider_access_authorization#id CloudProviderAccessAuthorization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/cloud_provider_access_authorization#project_id CloudProviderAccessAuthorization#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/cloud_provider_access_authorization#role_id CloudProviderAccessAuthorization#role_id}
  */
  readonly roleId: string;
  /**
  * aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/cloud_provider_access_authorization#aws CloudProviderAccessAuthorization#aws}
  */
  readonly aws?: CloudProviderAccessAuthorizationAws;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/cloud_provider_access_authorization#azure CloudProviderAccessAuthorization#azure}
  */
  readonly azure?: CloudProviderAccessAuthorizationAzure;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/cloud_provider_access_authorization#iam_assumed_role_arn CloudProviderAccessAuthorization#iam_assumed_role_arn}
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
export interface CloudProviderAccessAuthorizationAzure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/cloud_provider_access_authorization#atlas_azure_app_id CloudProviderAccessAuthorization#atlas_azure_app_id}
  */
  readonly atlasAzureAppId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/cloud_provider_access_authorization#service_principal_id CloudProviderAccessAuthorization#service_principal_id}
  */
  readonly servicePrincipalId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/cloud_provider_access_authorization#tenant_id CloudProviderAccessAuthorization#tenant_id}
  */
  readonly tenantId: string;
}

export function cloudProviderAccessAuthorizationAzureToTerraform(struct?: CloudProviderAccessAuthorizationAzureOutputReference | CloudProviderAccessAuthorizationAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    atlas_azure_app_id: cdktf.stringToTerraform(struct!.atlasAzureAppId),
    service_principal_id: cdktf.stringToTerraform(struct!.servicePrincipalId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}

export class CloudProviderAccessAuthorizationAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudProviderAccessAuthorizationAzure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._atlasAzureAppId !== undefined) {
      hasAnyValues = true;
      internalValueResult.atlasAzureAppId = this._atlasAzureAppId;
    }
    if (this._servicePrincipalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePrincipalId = this._servicePrincipalId;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProviderAccessAuthorizationAzure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._atlasAzureAppId = undefined;
      this._servicePrincipalId = undefined;
      this._tenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._atlasAzureAppId = value.atlasAzureAppId;
      this._servicePrincipalId = value.servicePrincipalId;
      this._tenantId = value.tenantId;
    }
  }

  // atlas_azure_app_id - computed: false, optional: false, required: true
  private _atlasAzureAppId?: string; 
  public get atlasAzureAppId() {
    return this.getStringAttribute('atlas_azure_app_id');
  }
  public set atlasAzureAppId(value: string) {
    this._atlasAzureAppId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get atlasAzureAppIdInput() {
    return this._atlasAzureAppId;
  }

  // service_principal_id - computed: false, optional: false, required: true
  private _servicePrincipalId?: string; 
  public get servicePrincipalId() {
    return this.getStringAttribute('service_principal_id');
  }
  public set servicePrincipalId(value: string) {
    this._servicePrincipalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalIdInput() {
    return this._servicePrincipalId;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/cloud_provider_access_authorization mongodbatlas_cloud_provider_access_authorization}
*/
export class CloudProviderAccessAuthorization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_cloud_provider_access_authorization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudProviderAccessAuthorization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudProviderAccessAuthorization to import
  * @param importFromId The id of the existing CloudProviderAccessAuthorization that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/cloud_provider_access_authorization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudProviderAccessAuthorization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_cloud_provider_access_authorization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/cloud_provider_access_authorization mongodbatlas_cloud_provider_access_authorization} Resource
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
        providerVersion: '1.12.1',
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
    this._azure.internalValue = config.azure;
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

  // azure - computed: false, optional: true, required: false
  private _azure = new CloudProviderAccessAuthorizationAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: CloudProviderAccessAuthorizationAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
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
      azure: cloudProviderAccessAuthorizationAzureToTerraform(this._azure.internalValue),
    };
  }
}
