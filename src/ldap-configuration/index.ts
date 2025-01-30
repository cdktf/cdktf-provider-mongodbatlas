/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/ldap_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LdapConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/ldap_configuration#authentication_enabled LdapConfiguration#authentication_enabled}
  */
  readonly authenticationEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/ldap_configuration#authorization_enabled LdapConfiguration#authorization_enabled}
  */
  readonly authorizationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/ldap_configuration#authz_query_template LdapConfiguration#authz_query_template}
  */
  readonly authzQueryTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/ldap_configuration#bind_password LdapConfiguration#bind_password}
  */
  readonly bindPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/ldap_configuration#bind_username LdapConfiguration#bind_username}
  */
  readonly bindUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/ldap_configuration#ca_certificate LdapConfiguration#ca_certificate}
  */
  readonly caCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/ldap_configuration#hostname LdapConfiguration#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/ldap_configuration#id LdapConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/ldap_configuration#port LdapConfiguration#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/ldap_configuration#project_id LdapConfiguration#project_id}
  */
  readonly projectId: string;
  /**
  * user_to_dn_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/ldap_configuration#user_to_dn_mapping LdapConfiguration#user_to_dn_mapping}
  */
  readonly userToDnMapping?: LdapConfigurationUserToDnMapping[] | cdktf.IResolvable;
}
export interface LdapConfigurationUserToDnMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/ldap_configuration#ldap_query LdapConfiguration#ldap_query}
  */
  readonly ldapQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/ldap_configuration#match LdapConfiguration#match}
  */
  readonly match?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/ldap_configuration#substitution LdapConfiguration#substitution}
  */
  readonly substitution?: string;
}

export function ldapConfigurationUserToDnMappingToTerraform(struct?: LdapConfigurationUserToDnMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ldap_query: cdktf.stringToTerraform(struct!.ldapQuery),
    match: cdktf.stringToTerraform(struct!.match),
    substitution: cdktf.stringToTerraform(struct!.substitution),
  }
}


export function ldapConfigurationUserToDnMappingToHclTerraform(struct?: LdapConfigurationUserToDnMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ldap_query: {
      value: cdktf.stringToHclTerraform(struct!.ldapQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    substitution: {
      value: cdktf.stringToHclTerraform(struct!.substitution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LdapConfigurationUserToDnMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LdapConfigurationUserToDnMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ldapQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapQuery = this._ldapQuery;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._substitution !== undefined) {
      hasAnyValues = true;
      internalValueResult.substitution = this._substitution;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LdapConfigurationUserToDnMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ldapQuery = undefined;
      this._match = undefined;
      this._substitution = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ldapQuery = value.ldapQuery;
      this._match = value.match;
      this._substitution = value.substitution;
    }
  }

  // ldap_query - computed: true, optional: true, required: false
  private _ldapQuery?: string; 
  public get ldapQuery() {
    return this.getStringAttribute('ldap_query');
  }
  public set ldapQuery(value: string) {
    this._ldapQuery = value;
  }
  public resetLdapQuery() {
    this._ldapQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapQueryInput() {
    return this._ldapQuery;
  }

  // match - computed: true, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // substitution - computed: true, optional: true, required: false
  private _substitution?: string; 
  public get substitution() {
    return this.getStringAttribute('substitution');
  }
  public set substitution(value: string) {
    this._substitution = value;
  }
  public resetSubstitution() {
    this._substitution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substitutionInput() {
    return this._substitution;
  }
}

export class LdapConfigurationUserToDnMappingList extends cdktf.ComplexList {
  public internalValue? : LdapConfigurationUserToDnMapping[] | cdktf.IResolvable

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
  public get(index: number): LdapConfigurationUserToDnMappingOutputReference {
    return new LdapConfigurationUserToDnMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/ldap_configuration mongodbatlas_ldap_configuration}
*/
export class LdapConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_ldap_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LdapConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LdapConfiguration to import
  * @param importFromId The id of the existing LdapConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/ldap_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LdapConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_ldap_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/ldap_configuration mongodbatlas_ldap_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LdapConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: LdapConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_ldap_configuration',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.26.0',
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
    this._authenticationEnabled = config.authenticationEnabled;
    this._authorizationEnabled = config.authorizationEnabled;
    this._authzQueryTemplate = config.authzQueryTemplate;
    this._bindPassword = config.bindPassword;
    this._bindUsername = config.bindUsername;
    this._caCertificate = config.caCertificate;
    this._hostname = config.hostname;
    this._id = config.id;
    this._port = config.port;
    this._projectId = config.projectId;
    this._userToDnMapping.internalValue = config.userToDnMapping;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_enabled - computed: false, optional: false, required: true
  private _authenticationEnabled?: boolean | cdktf.IResolvable; 
  public get authenticationEnabled() {
    return this.getBooleanAttribute('authentication_enabled');
  }
  public set authenticationEnabled(value: boolean | cdktf.IResolvable) {
    this._authenticationEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationEnabledInput() {
    return this._authenticationEnabled;
  }

  // authorization_enabled - computed: true, optional: true, required: false
  private _authorizationEnabled?: boolean | cdktf.IResolvable; 
  public get authorizationEnabled() {
    return this.getBooleanAttribute('authorization_enabled');
  }
  public set authorizationEnabled(value: boolean | cdktf.IResolvable) {
    this._authorizationEnabled = value;
  }
  public resetAuthorizationEnabled() {
    this._authorizationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationEnabledInput() {
    return this._authorizationEnabled;
  }

  // authz_query_template - computed: true, optional: true, required: false
  private _authzQueryTemplate?: string; 
  public get authzQueryTemplate() {
    return this.getStringAttribute('authz_query_template');
  }
  public set authzQueryTemplate(value: string) {
    this._authzQueryTemplate = value;
  }
  public resetAuthzQueryTemplate() {
    this._authzQueryTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authzQueryTemplateInput() {
    return this._authzQueryTemplate;
  }

  // bind_password - computed: false, optional: false, required: true
  private _bindPassword?: string; 
  public get bindPassword() {
    return this.getStringAttribute('bind_password');
  }
  public set bindPassword(value: string) {
    this._bindPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindPasswordInput() {
    return this._bindPassword;
  }

  // bind_username - computed: false, optional: false, required: true
  private _bindUsername?: string; 
  public get bindUsername() {
    return this.getStringAttribute('bind_username');
  }
  public set bindUsername(value: string) {
    this._bindUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindUsernameInput() {
    return this._bindUsername;
  }

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // user_to_dn_mapping - computed: false, optional: true, required: false
  private _userToDnMapping = new LdapConfigurationUserToDnMappingList(this, "user_to_dn_mapping", false);
  public get userToDnMapping() {
    return this._userToDnMapping;
  }
  public putUserToDnMapping(value: LdapConfigurationUserToDnMapping[] | cdktf.IResolvable) {
    this._userToDnMapping.internalValue = value;
  }
  public resetUserToDnMapping() {
    this._userToDnMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userToDnMappingInput() {
    return this._userToDnMapping.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_enabled: cdktf.booleanToTerraform(this._authenticationEnabled),
      authorization_enabled: cdktf.booleanToTerraform(this._authorizationEnabled),
      authz_query_template: cdktf.stringToTerraform(this._authzQueryTemplate),
      bind_password: cdktf.stringToTerraform(this._bindPassword),
      bind_username: cdktf.stringToTerraform(this._bindUsername),
      ca_certificate: cdktf.stringToTerraform(this._caCertificate),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      port: cdktf.numberToTerraform(this._port),
      project_id: cdktf.stringToTerraform(this._projectId),
      user_to_dn_mapping: cdktf.listMapper(ldapConfigurationUserToDnMappingToTerraform, true)(this._userToDnMapping.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_enabled: {
        value: cdktf.booleanToHclTerraform(this._authenticationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authorization_enabled: {
        value: cdktf.booleanToHclTerraform(this._authorizationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authz_query_template: {
        value: cdktf.stringToHclTerraform(this._authzQueryTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_password: {
        value: cdktf.stringToHclTerraform(this._bindPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_username: {
        value: cdktf.stringToHclTerraform(this._bindUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_certificate: {
        value: cdktf.stringToHclTerraform(this._caCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_to_dn_mapping: {
        value: cdktf.listMapperHcl(ldapConfigurationUserToDnMappingToHclTerraform, true)(this._userToDnMapping.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LdapConfigurationUserToDnMappingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
