// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/data-sources/ldap_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasLdapConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/data-sources/ldap_configuration#id DataMongodbatlasLdapConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/data-sources/ldap_configuration#project_id DataMongodbatlasLdapConfiguration#project_id}
  */
  readonly projectId: string;
}
export interface DataMongodbatlasLdapConfigurationUserToDnMapping {
}

export function dataMongodbatlasLdapConfigurationUserToDnMappingToTerraform(struct?: DataMongodbatlasLdapConfigurationUserToDnMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataMongodbatlasLdapConfigurationUserToDnMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasLdapConfigurationUserToDnMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasLdapConfigurationUserToDnMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ldap_query - computed: true, optional: false, required: false
  public get ldapQuery() {
    return this.getStringAttribute('ldap_query');
  }

  // match - computed: true, optional: false, required: false
  public get match() {
    return this.getStringAttribute('match');
  }

  // substitution - computed: true, optional: false, required: false
  public get substitution() {
    return this.getStringAttribute('substitution');
  }
}

export class DataMongodbatlasLdapConfigurationUserToDnMappingList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasLdapConfigurationUserToDnMappingOutputReference {
    return new DataMongodbatlasLdapConfigurationUserToDnMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/data-sources/ldap_configuration mongodbatlas_ldap_configuration}
*/
export class DataMongodbatlasLdapConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_ldap_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMongodbatlasLdapConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMongodbatlasLdapConfiguration to import
  * @param importFromId The id of the existing DataMongodbatlasLdapConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/data-sources/ldap_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMongodbatlasLdapConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_ldap_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/data-sources/ldap_configuration mongodbatlas_ldap_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasLdapConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasLdapConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_ldap_configuration',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.12.3',
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

  // authentication_enabled - computed: true, optional: false, required: false
  public get authenticationEnabled() {
    return this.getBooleanAttribute('authentication_enabled');
  }

  // authorization_enabled - computed: true, optional: false, required: false
  public get authorizationEnabled() {
    return this.getBooleanAttribute('authorization_enabled');
  }

  // authz_query_template - computed: true, optional: false, required: false
  public get authzQueryTemplate() {
    return this.getStringAttribute('authz_query_template');
  }

  // bind_password - computed: true, optional: false, required: false
  public get bindPassword() {
    return this.getStringAttribute('bind_password');
  }

  // bind_username - computed: true, optional: false, required: false
  public get bindUsername() {
    return this.getStringAttribute('bind_username');
  }

  // ca_certificate - computed: true, optional: false, required: false
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
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

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
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

  // user_to_dn_mapping - computed: true, optional: false, required: false
  private _userToDnMapping = new DataMongodbatlasLdapConfigurationUserToDnMappingList(this, "user_to_dn_mapping", false);
  public get userToDnMapping() {
    return this._userToDnMapping;
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
