// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/x509_authentication_database_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface X509AuthenticationDatabaseUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/x509_authentication_database_user#customer_x509_cas X509AuthenticationDatabaseUser#customer_x509_cas}
  */
  readonly customerX509Cas?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/x509_authentication_database_user#id X509AuthenticationDatabaseUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/x509_authentication_database_user#months_until_expiration X509AuthenticationDatabaseUser#months_until_expiration}
  */
  readonly monthsUntilExpiration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/x509_authentication_database_user#project_id X509AuthenticationDatabaseUser#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/x509_authentication_database_user#username X509AuthenticationDatabaseUser#username}
  */
  readonly username?: string;
}
export interface X509AuthenticationDatabaseUserCertificates {
}

export function x509AuthenticationDatabaseUserCertificatesToTerraform(struct?: X509AuthenticationDatabaseUserCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class X509AuthenticationDatabaseUserCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): X509AuthenticationDatabaseUserCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: X509AuthenticationDatabaseUserCertificates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // not_after - computed: true, optional: false, required: false
  public get notAfter() {
    return this.getStringAttribute('not_after');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }
}

export class X509AuthenticationDatabaseUserCertificatesList extends cdktf.ComplexList {

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
  public get(index: number): X509AuthenticationDatabaseUserCertificatesOutputReference {
    return new X509AuthenticationDatabaseUserCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/x509_authentication_database_user mongodbatlas_x509_authentication_database_user}
*/
export class X509AuthenticationDatabaseUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_x509_authentication_database_user";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/x509_authentication_database_user mongodbatlas_x509_authentication_database_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options X509AuthenticationDatabaseUserConfig
  */
  public constructor(scope: Construct, id: string, config: X509AuthenticationDatabaseUserConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_x509_authentication_database_user',
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
    this._customerX509Cas = config.customerX509Cas;
    this._id = config.id;
    this._monthsUntilExpiration = config.monthsUntilExpiration;
    this._projectId = config.projectId;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificates - computed: true, optional: false, required: false
  private _certificates = new X509AuthenticationDatabaseUserCertificatesList(this, "certificates", false);
  public get certificates() {
    return this._certificates;
  }

  // current_certificate - computed: true, optional: false, required: false
  public get currentCertificate() {
    return this.getStringAttribute('current_certificate');
  }

  // customer_x509_cas - computed: false, optional: true, required: false
  private _customerX509Cas?: string; 
  public get customerX509Cas() {
    return this.getStringAttribute('customer_x509_cas');
  }
  public set customerX509Cas(value: string) {
    this._customerX509Cas = value;
  }
  public resetCustomerX509Cas() {
    this._customerX509Cas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerX509CasInput() {
    return this._customerX509Cas;
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

  // months_until_expiration - computed: false, optional: true, required: false
  private _monthsUntilExpiration?: number; 
  public get monthsUntilExpiration() {
    return this.getNumberAttribute('months_until_expiration');
  }
  public set monthsUntilExpiration(value: number) {
    this._monthsUntilExpiration = value;
  }
  public resetMonthsUntilExpiration() {
    this._monthsUntilExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsUntilExpirationInput() {
    return this._monthsUntilExpiration;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      customer_x509_cas: cdktf.stringToTerraform(this._customerX509Cas),
      id: cdktf.stringToTerraform(this._id),
      months_until_expiration: cdktf.numberToTerraform(this._monthsUntilExpiration),
      project_id: cdktf.stringToTerraform(this._projectId),
      username: cdktf.stringToTerraform(this._username),
    };
  }
}
