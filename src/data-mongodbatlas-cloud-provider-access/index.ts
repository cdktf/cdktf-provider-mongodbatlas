// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/cloud_provider_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasCloudProviderAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/cloud_provider_access#id DataMongodbatlasCloudProviderAccess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/cloud_provider_access#project_id DataMongodbatlasCloudProviderAccess#project_id}
  */
  readonly projectId: string;
}
export interface DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsages {
}

export function dataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesToTerraform(struct?: DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsages | undefined) {
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

export class DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference {
    return new DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasCloudProviderAccessAwsIamRoles {
}

export function dataMongodbatlasCloudProviderAccessAwsIamRolesToTerraform(struct?: DataMongodbatlasCloudProviderAccessAwsIamRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasCloudProviderAccessAwsIamRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasCloudProviderAccessAwsIamRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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
  private _featureUsages = new DataMongodbatlasCloudProviderAccessAwsIamRolesFeatureUsagesList(this, "feature_usages", false);
  public get featureUsages() {
    return this._featureUsages;
  }

  // iam_assumed_role_arn - computed: true, optional: false, required: false
  public get iamAssumedRoleArn() {
    return this.getStringAttribute('iam_assumed_role_arn');
  }

  // provider_name - computed: true, optional: false, required: false
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }

  // role_id - computed: true, optional: false, required: false
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
}

export class DataMongodbatlasCloudProviderAccessAwsIamRolesList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference {
    return new DataMongodbatlasCloudProviderAccessAwsIamRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/cloud_provider_access mongodbatlas_cloud_provider_access}
*/
export class DataMongodbatlasCloudProviderAccess extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_cloud_provider_access";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/cloud_provider_access mongodbatlas_cloud_provider_access} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasCloudProviderAccessConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasCloudProviderAccessConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_cloud_provider_access',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.10.1',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_iam_roles - computed: true, optional: false, required: false
  private _awsIamRoles = new DataMongodbatlasCloudProviderAccessAwsIamRolesList(this, "aws_iam_roles", false);
  public get awsIamRoles() {
    return this._awsIamRoles;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }
}
