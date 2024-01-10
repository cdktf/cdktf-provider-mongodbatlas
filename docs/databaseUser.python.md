# `databaseUser` Submodule <a name="`databaseUser` Submodule" id="@cdktf/provider-mongodbatlas.databaseUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseUser <a name="DatabaseUser" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user mongodbatlas_database_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import database_user

databaseUser.DatabaseUser(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auth_database_name: str,
  project_id: str,
  username: str,
  aws_iam_type: str = None,
  labels: typing.Union[IResolvable, typing.List[DatabaseUserLabels]] = None,
  ldap_auth_type: str = None,
  oidc_auth_type: str = None,
  password: str = None,
  roles: typing.Union[IResolvable, typing.List[DatabaseUserRoles]] = None,
  scopes: typing.Union[IResolvable, typing.List[DatabaseUserScopes]] = None,
  x509_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.authDatabaseName">auth_database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#auth_database_name DatabaseUser#auth_database_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#project_id DatabaseUser#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#username DatabaseUser#username}. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.awsIamType">aws_iam_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#aws_iam_type DatabaseUser#aws_iam_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.labels">labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabels">DatabaseUserLabels</a>]]</code> | labels block. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.ldapAuthType">ldap_auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#ldap_auth_type DatabaseUser#ldap_auth_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.oidcAuthType">oidc_auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#oidc_auth_type DatabaseUser#oidc_auth_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#password DatabaseUser#password}. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.roles">roles</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRoles">DatabaseUserRoles</a>]]</code> | roles block. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.scopes">scopes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopes">DatabaseUserScopes</a>]]</code> | scopes block. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.x509Type">x509_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#x509_type DatabaseUser#x509_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_database_name`<sup>Required</sup> <a name="auth_database_name" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.authDatabaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#auth_database_name DatabaseUser#auth_database_name}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#project_id DatabaseUser#project_id}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#username DatabaseUser#username}.

---

##### `aws_iam_type`<sup>Optional</sup> <a name="aws_iam_type" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.awsIamType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#aws_iam_type DatabaseUser#aws_iam_type}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.labels"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabels">DatabaseUserLabels</a>]]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#labels DatabaseUser#labels}

---

##### `ldap_auth_type`<sup>Optional</sup> <a name="ldap_auth_type" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.ldapAuthType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#ldap_auth_type DatabaseUser#ldap_auth_type}.

---

##### `oidc_auth_type`<sup>Optional</sup> <a name="oidc_auth_type" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.oidcAuthType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#oidc_auth_type DatabaseUser#oidc_auth_type}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#password DatabaseUser#password}.

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.roles"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRoles">DatabaseUserRoles</a>]]

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#roles DatabaseUser#roles}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.scopes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopes">DatabaseUserScopes</a>]]

scopes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#scopes DatabaseUser#scopes}

---

##### `x509_type`<sup>Optional</sup> <a name="x509_type" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.Initializer.parameter.x509Type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#x509_type DatabaseUser#x509_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.putLabels">put_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.putRoles">put_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.putScopes">put_scopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.resetAwsIamType">reset_aws_iam_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.resetLdapAuthType">reset_ldap_auth_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.resetOidcAuthType">reset_oidc_auth_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.resetRoles">reset_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.resetScopes">reset_scopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.resetX509Type">reset_x509_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_labels` <a name="put_labels" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.putLabels"></a>

```python
def put_labels(
  value: typing.Union[IResolvable, typing.List[DatabaseUserLabels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.putLabels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabels">DatabaseUserLabels</a>]]

---

##### `put_roles` <a name="put_roles" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.putRoles"></a>

```python
def put_roles(
  value: typing.Union[IResolvable, typing.List[DatabaseUserRoles]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.putRoles.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRoles">DatabaseUserRoles</a>]]

---

##### `put_scopes` <a name="put_scopes" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.putScopes"></a>

```python
def put_scopes(
  value: typing.Union[IResolvable, typing.List[DatabaseUserScopes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.putScopes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopes">DatabaseUserScopes</a>]]

---

##### `reset_aws_iam_type` <a name="reset_aws_iam_type" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.resetAwsIamType"></a>

```python
def reset_aws_iam_type() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_ldap_auth_type` <a name="reset_ldap_auth_type" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.resetLdapAuthType"></a>

```python
def reset_ldap_auth_type() -> None
```

##### `reset_oidc_auth_type` <a name="reset_oidc_auth_type" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.resetOidcAuthType"></a>

```python
def reset_oidc_auth_type() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_roles` <a name="reset_roles" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.resetRoles"></a>

```python
def reset_roles() -> None
```

##### `reset_scopes` <a name="reset_scopes" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.resetScopes"></a>

```python
def reset_scopes() -> None
```

##### `reset_x509_type` <a name="reset_x509_type" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.resetX509Type"></a>

```python
def reset_x509_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseUser resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import database_user

databaseUser.DatabaseUser.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import database_user

databaseUser.DatabaseUser.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import database_user

databaseUser.DatabaseUser.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import database_user

databaseUser.DatabaseUser.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseUser resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseUser to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsList">DatabaseUserLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesList">DatabaseUserRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.scopes">scopes</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesList">DatabaseUserScopesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.authDatabaseNameInput">auth_database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.awsIamTypeInput">aws_iam_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.labelsInput">labels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabels">DatabaseUserLabels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.ldapAuthTypeInput">ldap_auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.oidcAuthTypeInput">oidc_auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.rolesInput">roles_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRoles">DatabaseUserRoles</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.scopesInput">scopes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopes">DatabaseUserScopes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.x509TypeInput">x509_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.authDatabaseName">auth_database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.awsIamType">aws_iam_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.ldapAuthType">ldap_auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.oidcAuthType">oidc_auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.x509Type">x509_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.labels"></a>

```python
labels: DatabaseUserLabelsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsList">DatabaseUserLabelsList</a>

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.roles"></a>

```python
roles: DatabaseUserRolesList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesList">DatabaseUserRolesList</a>

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.scopes"></a>

```python
scopes: DatabaseUserScopesList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesList">DatabaseUserScopesList</a>

---

##### `auth_database_name_input`<sup>Optional</sup> <a name="auth_database_name_input" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.authDatabaseNameInput"></a>

```python
auth_database_name_input: str
```

- *Type:* str

---

##### `aws_iam_type_input`<sup>Optional</sup> <a name="aws_iam_type_input" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.awsIamTypeInput"></a>

```python
aws_iam_type_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.labelsInput"></a>

```python
labels_input: typing.Union[IResolvable, typing.List[DatabaseUserLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabels">DatabaseUserLabels</a>]]

---

##### `ldap_auth_type_input`<sup>Optional</sup> <a name="ldap_auth_type_input" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.ldapAuthTypeInput"></a>

```python
ldap_auth_type_input: str
```

- *Type:* str

---

##### `oidc_auth_type_input`<sup>Optional</sup> <a name="oidc_auth_type_input" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.oidcAuthTypeInput"></a>

```python
oidc_auth_type_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.rolesInput"></a>

```python
roles_input: typing.Union[IResolvable, typing.List[DatabaseUserRoles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRoles">DatabaseUserRoles</a>]]

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.scopesInput"></a>

```python
scopes_input: typing.Union[IResolvable, typing.List[DatabaseUserScopes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopes">DatabaseUserScopes</a>]]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `x509_type_input`<sup>Optional</sup> <a name="x509_type_input" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.x509TypeInput"></a>

```python
x509_type_input: str
```

- *Type:* str

---

##### `auth_database_name`<sup>Required</sup> <a name="auth_database_name" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.authDatabaseName"></a>

```python
auth_database_name: str
```

- *Type:* str

---

##### `aws_iam_type`<sup>Required</sup> <a name="aws_iam_type" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.awsIamType"></a>

```python
aws_iam_type: str
```

- *Type:* str

---

##### `ldap_auth_type`<sup>Required</sup> <a name="ldap_auth_type" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.ldapAuthType"></a>

```python
ldap_auth_type: str
```

- *Type:* str

---

##### `oidc_auth_type`<sup>Required</sup> <a name="oidc_auth_type" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.oidcAuthType"></a>

```python
oidc_auth_type: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `x509_type`<sup>Required</sup> <a name="x509_type" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.x509Type"></a>

```python
x509_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUser.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseUserConfig <a name="DatabaseUserConfig" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import database_user

databaseUser.DatabaseUserConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auth_database_name: str,
  project_id: str,
  username: str,
  aws_iam_type: str = None,
  labels: typing.Union[IResolvable, typing.List[DatabaseUserLabels]] = None,
  ldap_auth_type: str = None,
  oidc_auth_type: str = None,
  password: str = None,
  roles: typing.Union[IResolvable, typing.List[DatabaseUserRoles]] = None,
  scopes: typing.Union[IResolvable, typing.List[DatabaseUserScopes]] = None,
  x509_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.authDatabaseName">auth_database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#auth_database_name DatabaseUser#auth_database_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#project_id DatabaseUser#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#username DatabaseUser#username}. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.awsIamType">aws_iam_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#aws_iam_type DatabaseUser#aws_iam_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.labels">labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabels">DatabaseUserLabels</a>]]</code> | labels block. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.ldapAuthType">ldap_auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#ldap_auth_type DatabaseUser#ldap_auth_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.oidcAuthType">oidc_auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#oidc_auth_type DatabaseUser#oidc_auth_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#password DatabaseUser#password}. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.roles">roles</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRoles">DatabaseUserRoles</a>]]</code> | roles block. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.scopes">scopes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopes">DatabaseUserScopes</a>]]</code> | scopes block. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.x509Type">x509_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#x509_type DatabaseUser#x509_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_database_name`<sup>Required</sup> <a name="auth_database_name" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.authDatabaseName"></a>

```python
auth_database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#auth_database_name DatabaseUser#auth_database_name}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#project_id DatabaseUser#project_id}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#username DatabaseUser#username}.

---

##### `aws_iam_type`<sup>Optional</sup> <a name="aws_iam_type" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.awsIamType"></a>

```python
aws_iam_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#aws_iam_type DatabaseUser#aws_iam_type}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.labels"></a>

```python
labels: typing.Union[IResolvable, typing.List[DatabaseUserLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabels">DatabaseUserLabels</a>]]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#labels DatabaseUser#labels}

---

##### `ldap_auth_type`<sup>Optional</sup> <a name="ldap_auth_type" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.ldapAuthType"></a>

```python
ldap_auth_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#ldap_auth_type DatabaseUser#ldap_auth_type}.

---

##### `oidc_auth_type`<sup>Optional</sup> <a name="oidc_auth_type" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.oidcAuthType"></a>

```python
oidc_auth_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#oidc_auth_type DatabaseUser#oidc_auth_type}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#password DatabaseUser#password}.

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.roles"></a>

```python
roles: typing.Union[IResolvable, typing.List[DatabaseUserRoles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRoles">DatabaseUserRoles</a>]]

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#roles DatabaseUser#roles}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.scopes"></a>

```python
scopes: typing.Union[IResolvable, typing.List[DatabaseUserScopes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopes">DatabaseUserScopes</a>]]

scopes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#scopes DatabaseUser#scopes}

---

##### `x509_type`<sup>Optional</sup> <a name="x509_type" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserConfig.property.x509Type"></a>

```python
x509_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#x509_type DatabaseUser#x509_type}.

---

### DatabaseUserLabels <a name="DatabaseUserLabels" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabels.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import database_user

databaseUser.DatabaseUserLabels(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabels.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#key DatabaseUser#key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabels.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#value DatabaseUser#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabels.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#key DatabaseUser#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabels.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#value DatabaseUser#value}.

---

### DatabaseUserRoles <a name="DatabaseUserRoles" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRoles.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import database_user

databaseUser.DatabaseUserRoles(
  database_name: str,
  role_name: str,
  collection_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRoles.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#database_name DatabaseUser#database_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRoles.property.roleName">role_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#role_name DatabaseUser#role_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRoles.property.collectionName">collection_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#collection_name DatabaseUser#collection_name}. |

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRoles.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#database_name DatabaseUser#database_name}.

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRoles.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#role_name DatabaseUser#role_name}.

---

##### `collection_name`<sup>Optional</sup> <a name="collection_name" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRoles.property.collectionName"></a>

```python
collection_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#collection_name DatabaseUser#collection_name}.

---

### DatabaseUserScopes <a name="DatabaseUserScopes" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopes.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import database_user

databaseUser.DatabaseUserScopes(
  name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopes.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#name DatabaseUser#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopes.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#type DatabaseUser#type}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopes.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#name DatabaseUser#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopes.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/database_user#type DatabaseUser#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseUserLabelsList <a name="DatabaseUserLabelsList" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import database_user

databaseUser.DatabaseUserLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseUserLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabels">DatabaseUserLabels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseUserLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabels">DatabaseUserLabels</a>]]

---


### DatabaseUserLabelsOutputReference <a name="DatabaseUserLabelsOutputReference" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import database_user

databaseUser.DatabaseUserLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabels">DatabaseUserLabels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseUserLabels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserLabels">DatabaseUserLabels</a>]

---


### DatabaseUserRolesList <a name="DatabaseUserRolesList" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import database_user

databaseUser.DatabaseUserRolesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseUserRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRoles">DatabaseUserRoles</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseUserRoles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRoles">DatabaseUserRoles</a>]]

---


### DatabaseUserRolesOutputReference <a name="DatabaseUserRolesOutputReference" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import database_user

databaseUser.DatabaseUserRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.resetCollectionName">reset_collection_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_collection_name` <a name="reset_collection_name" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.resetCollectionName"></a>

```python
def reset_collection_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.property.collectionNameInput">collection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.property.roleNameInput">role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.property.collectionName">collection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.property.roleName">role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRoles">DatabaseUserRoles</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `collection_name_input`<sup>Optional</sup> <a name="collection_name_input" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.property.collectionNameInput"></a>

```python
collection_name_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `role_name_input`<sup>Optional</sup> <a name="role_name_input" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.property.roleNameInput"></a>

```python
role_name_input: str
```

- *Type:* str

---

##### `collection_name`<sup>Required</sup> <a name="collection_name" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.property.collectionName"></a>

```python
collection_name: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRolesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseUserRoles]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserRoles">DatabaseUserRoles</a>]

---


### DatabaseUserScopesList <a name="DatabaseUserScopesList" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import database_user

databaseUser.DatabaseUserScopesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseUserScopesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopes">DatabaseUserScopes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseUserScopes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopes">DatabaseUserScopes</a>]]

---


### DatabaseUserScopesOutputReference <a name="DatabaseUserScopesOutputReference" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import database_user

databaseUser.DatabaseUserScopesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopes">DatabaseUserScopes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseUserScopes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.databaseUser.DatabaseUserScopes">DatabaseUserScopes</a>]

---



