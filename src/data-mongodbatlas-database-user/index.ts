// https://www.terraform.io/docs/providers/mongodbatlas/d/database_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasDatabaseUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/database_user#auth_database_name DataMongodbatlasDatabaseUser#auth_database_name}
  */
  readonly authDatabaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/database_user#database_name DataMongodbatlasDatabaseUser#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/database_user#id DataMongodbatlasDatabaseUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/database_user#project_id DataMongodbatlasDatabaseUser#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/database_user#username DataMongodbatlasDatabaseUser#username}
  */
  readonly username: string;
}
export interface DataMongodbatlasDatabaseUserLabels {
}

export function dataMongodbatlasDatabaseUserLabelsToTerraform(struct?: DataMongodbatlasDatabaseUserLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataMongodbatlasDatabaseUserLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasDatabaseUserLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasDatabaseUserLabels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataMongodbatlasDatabaseUserLabelsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasDatabaseUserLabelsOutputReference {
    return new DataMongodbatlasDatabaseUserLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasDatabaseUserRoles {
}

export function dataMongodbatlasDatabaseUserRolesToTerraform(struct?: DataMongodbatlasDatabaseUserRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataMongodbatlasDatabaseUserRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasDatabaseUserRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasDatabaseUserRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // collection_name - computed: true, optional: false, required: false
  public get collectionName() {
    return this.getStringAttribute('collection_name');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // role_name - computed: true, optional: false, required: false
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
}

export class DataMongodbatlasDatabaseUserRolesList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasDatabaseUserRolesOutputReference {
    return new DataMongodbatlasDatabaseUserRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasDatabaseUserScopes {
}

export function dataMongodbatlasDatabaseUserScopesToTerraform(struct?: DataMongodbatlasDatabaseUserScopes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataMongodbatlasDatabaseUserScopesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasDatabaseUserScopes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasDatabaseUserScopes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataMongodbatlasDatabaseUserScopesList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasDatabaseUserScopesOutputReference {
    return new DataMongodbatlasDatabaseUserScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/mongodbatlas/d/database_user mongodbatlas_database_user}
*/
export class DataMongodbatlasDatabaseUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_database_user";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/mongodbatlas/d/database_user mongodbatlas_database_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasDatabaseUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasDatabaseUserConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_database_user',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.8.1',
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
    this._authDatabaseName = config.authDatabaseName;
    this._databaseName = config.databaseName;
    this._id = config.id;
    this._projectId = config.projectId;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_database_name - computed: false, optional: true, required: false
  private _authDatabaseName?: string; 
  public get authDatabaseName() {
    return this.getStringAttribute('auth_database_name');
  }
  public set authDatabaseName(value: string) {
    this._authDatabaseName = value;
  }
  public resetAuthDatabaseName() {
    this._authDatabaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authDatabaseNameInput() {
    return this._authDatabaseName;
  }

  // aws_iam_type - computed: true, optional: false, required: false
  public get awsIamType() {
    return this.getStringAttribute('aws_iam_type');
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // labels - computed: true, optional: false, required: false
  private _labels = new DataMongodbatlasDatabaseUserLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }

  // ldap_auth_type - computed: true, optional: false, required: false
  public get ldapAuthType() {
    return this.getStringAttribute('ldap_auth_type');
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

  // roles - computed: true, optional: false, required: false
  private _roles = new DataMongodbatlasDatabaseUserRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
  }

  // scopes - computed: true, optional: false, required: false
  private _scopes = new DataMongodbatlasDatabaseUserScopesList(this, "scopes", false);
  public get scopes() {
    return this._scopes;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // x509_type - computed: true, optional: false, required: false
  public get x509Type() {
    return this.getStringAttribute('x509_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_database_name: cdktf.stringToTerraform(this._authDatabaseName),
      database_name: cdktf.stringToTerraform(this._databaseName),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      username: cdktf.stringToTerraform(this._username),
    };
  }
}
