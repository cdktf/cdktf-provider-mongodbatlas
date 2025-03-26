# `ldapConfiguration` Submodule <a name="`ldapConfiguration` Submodule" id="@cdktf/provider-mongodbatlas.ldapConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LdapConfiguration <a name="LdapConfiguration" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration mongodbatlas_ldap_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import ldap_configuration

ldapConfiguration.LdapConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authentication_enabled: typing.Union[bool, IResolvable],
  bind_password: str,
  bind_username: str,
  hostname: str,
  project_id: str,
  authorization_enabled: typing.Union[bool, IResolvable] = None,
  authz_query_template: str = None,
  ca_certificate: str = None,
  id: str = None,
  port: typing.Union[int, float] = None,
  user_to_dn_mapping: typing.Union[IResolvable, typing.List[LdapConfigurationUserToDnMapping]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.authenticationEnabled">authentication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#authentication_enabled LdapConfiguration#authentication_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.bindPassword">bind_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#bind_password LdapConfiguration#bind_password}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.bindUsername">bind_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#bind_username LdapConfiguration#bind_username}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#hostname LdapConfiguration#hostname}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#project_id LdapConfiguration#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.authorizationEnabled">authorization_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#authorization_enabled LdapConfiguration#authorization_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.authzQueryTemplate">authz_query_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#authz_query_template LdapConfiguration#authz_query_template}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.caCertificate">ca_certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#ca_certificate LdapConfiguration#ca_certificate}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#id LdapConfiguration#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#port LdapConfiguration#port}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.userToDnMapping">user_to_dn_mapping</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping">LdapConfigurationUserToDnMapping</a>]]</code> | user_to_dn_mapping block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authentication_enabled`<sup>Required</sup> <a name="authentication_enabled" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.authenticationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#authentication_enabled LdapConfiguration#authentication_enabled}.

---

##### `bind_password`<sup>Required</sup> <a name="bind_password" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.bindPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#bind_password LdapConfiguration#bind_password}.

---

##### `bind_username`<sup>Required</sup> <a name="bind_username" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.bindUsername"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#bind_username LdapConfiguration#bind_username}.

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.hostname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#hostname LdapConfiguration#hostname}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#project_id LdapConfiguration#project_id}.

---

##### `authorization_enabled`<sup>Optional</sup> <a name="authorization_enabled" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.authorizationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#authorization_enabled LdapConfiguration#authorization_enabled}.

---

##### `authz_query_template`<sup>Optional</sup> <a name="authz_query_template" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.authzQueryTemplate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#authz_query_template LdapConfiguration#authz_query_template}.

---

##### `ca_certificate`<sup>Optional</sup> <a name="ca_certificate" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.caCertificate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#ca_certificate LdapConfiguration#ca_certificate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#id LdapConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#port LdapConfiguration#port}.

---

##### `user_to_dn_mapping`<sup>Optional</sup> <a name="user_to_dn_mapping" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.userToDnMapping"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping">LdapConfigurationUserToDnMapping</a>]]

user_to_dn_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#user_to_dn_mapping LdapConfiguration#user_to_dn_mapping}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.putUserToDnMapping">put_user_to_dn_mapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetAuthorizationEnabled">reset_authorization_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetAuthzQueryTemplate">reset_authz_query_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetCaCertificate">reset_ca_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetUserToDnMapping">reset_user_to_dn_mapping</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_user_to_dn_mapping` <a name="put_user_to_dn_mapping" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.putUserToDnMapping"></a>

```python
def put_user_to_dn_mapping(
  value: typing.Union[IResolvable, typing.List[LdapConfigurationUserToDnMapping]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.putUserToDnMapping.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping">LdapConfigurationUserToDnMapping</a>]]

---

##### `reset_authorization_enabled` <a name="reset_authorization_enabled" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetAuthorizationEnabled"></a>

```python
def reset_authorization_enabled() -> None
```

##### `reset_authz_query_template` <a name="reset_authz_query_template" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetAuthzQueryTemplate"></a>

```python
def reset_authz_query_template() -> None
```

##### `reset_ca_certificate` <a name="reset_ca_certificate" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetCaCertificate"></a>

```python
def reset_ca_certificate() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_user_to_dn_mapping` <a name="reset_user_to_dn_mapping" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetUserToDnMapping"></a>

```python
def reset_user_to_dn_mapping() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LdapConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import ldap_configuration

ldapConfiguration.LdapConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import ldap_configuration

ldapConfiguration.LdapConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import ldap_configuration

ldapConfiguration.LdapConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import ldap_configuration

ldapConfiguration.LdapConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LdapConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LdapConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LdapConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LdapConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.userToDnMapping">user_to_dn_mapping</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList">LdapConfigurationUserToDnMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authenticationEnabledInput">authentication_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authorizationEnabledInput">authorization_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authzQueryTemplateInput">authz_query_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.bindPasswordInput">bind_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.bindUsernameInput">bind_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.caCertificateInput">ca_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.userToDnMappingInput">user_to_dn_mapping_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping">LdapConfigurationUserToDnMapping</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authenticationEnabled">authentication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authorizationEnabled">authorization_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authzQueryTemplate">authz_query_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.bindPassword">bind_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.bindUsername">bind_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.caCertificate">ca_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `user_to_dn_mapping`<sup>Required</sup> <a name="user_to_dn_mapping" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.userToDnMapping"></a>

```python
user_to_dn_mapping: LdapConfigurationUserToDnMappingList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList">LdapConfigurationUserToDnMappingList</a>

---

##### `authentication_enabled_input`<sup>Optional</sup> <a name="authentication_enabled_input" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authenticationEnabledInput"></a>

```python
authentication_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `authorization_enabled_input`<sup>Optional</sup> <a name="authorization_enabled_input" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authorizationEnabledInput"></a>

```python
authorization_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `authz_query_template_input`<sup>Optional</sup> <a name="authz_query_template_input" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authzQueryTemplateInput"></a>

```python
authz_query_template_input: str
```

- *Type:* str

---

##### `bind_password_input`<sup>Optional</sup> <a name="bind_password_input" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.bindPasswordInput"></a>

```python
bind_password_input: str
```

- *Type:* str

---

##### `bind_username_input`<sup>Optional</sup> <a name="bind_username_input" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.bindUsernameInput"></a>

```python
bind_username_input: str
```

- *Type:* str

---

##### `ca_certificate_input`<sup>Optional</sup> <a name="ca_certificate_input" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.caCertificateInput"></a>

```python
ca_certificate_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `user_to_dn_mapping_input`<sup>Optional</sup> <a name="user_to_dn_mapping_input" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.userToDnMappingInput"></a>

```python
user_to_dn_mapping_input: typing.Union[IResolvable, typing.List[LdapConfigurationUserToDnMapping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping">LdapConfigurationUserToDnMapping</a>]]

---

##### `authentication_enabled`<sup>Required</sup> <a name="authentication_enabled" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authenticationEnabled"></a>

```python
authentication_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `authorization_enabled`<sup>Required</sup> <a name="authorization_enabled" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authorizationEnabled"></a>

```python
authorization_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `authz_query_template`<sup>Required</sup> <a name="authz_query_template" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authzQueryTemplate"></a>

```python
authz_query_template: str
```

- *Type:* str

---

##### `bind_password`<sup>Required</sup> <a name="bind_password" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.bindPassword"></a>

```python
bind_password: str
```

- *Type:* str

---

##### `bind_username`<sup>Required</sup> <a name="bind_username" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.bindUsername"></a>

```python
bind_username: str
```

- *Type:* str

---

##### `ca_certificate`<sup>Required</sup> <a name="ca_certificate" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.caCertificate"></a>

```python
ca_certificate: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LdapConfigurationConfig <a name="LdapConfigurationConfig" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import ldap_configuration

ldapConfiguration.LdapConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authentication_enabled: typing.Union[bool, IResolvable],
  bind_password: str,
  bind_username: str,
  hostname: str,
  project_id: str,
  authorization_enabled: typing.Union[bool, IResolvable] = None,
  authz_query_template: str = None,
  ca_certificate: str = None,
  id: str = None,
  port: typing.Union[int, float] = None,
  user_to_dn_mapping: typing.Union[IResolvable, typing.List[LdapConfigurationUserToDnMapping]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.authenticationEnabled">authentication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#authentication_enabled LdapConfiguration#authentication_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.bindPassword">bind_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#bind_password LdapConfiguration#bind_password}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.bindUsername">bind_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#bind_username LdapConfiguration#bind_username}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#hostname LdapConfiguration#hostname}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#project_id LdapConfiguration#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.authorizationEnabled">authorization_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#authorization_enabled LdapConfiguration#authorization_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.authzQueryTemplate">authz_query_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#authz_query_template LdapConfiguration#authz_query_template}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.caCertificate">ca_certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#ca_certificate LdapConfiguration#ca_certificate}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#id LdapConfiguration#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#port LdapConfiguration#port}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.userToDnMapping">user_to_dn_mapping</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping">LdapConfigurationUserToDnMapping</a>]]</code> | user_to_dn_mapping block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authentication_enabled`<sup>Required</sup> <a name="authentication_enabled" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.authenticationEnabled"></a>

```python
authentication_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#authentication_enabled LdapConfiguration#authentication_enabled}.

---

##### `bind_password`<sup>Required</sup> <a name="bind_password" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.bindPassword"></a>

```python
bind_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#bind_password LdapConfiguration#bind_password}.

---

##### `bind_username`<sup>Required</sup> <a name="bind_username" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.bindUsername"></a>

```python
bind_username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#bind_username LdapConfiguration#bind_username}.

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#hostname LdapConfiguration#hostname}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#project_id LdapConfiguration#project_id}.

---

##### `authorization_enabled`<sup>Optional</sup> <a name="authorization_enabled" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.authorizationEnabled"></a>

```python
authorization_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#authorization_enabled LdapConfiguration#authorization_enabled}.

---

##### `authz_query_template`<sup>Optional</sup> <a name="authz_query_template" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.authzQueryTemplate"></a>

```python
authz_query_template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#authz_query_template LdapConfiguration#authz_query_template}.

---

##### `ca_certificate`<sup>Optional</sup> <a name="ca_certificate" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.caCertificate"></a>

```python
ca_certificate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#ca_certificate LdapConfiguration#ca_certificate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#id LdapConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#port LdapConfiguration#port}.

---

##### `user_to_dn_mapping`<sup>Optional</sup> <a name="user_to_dn_mapping" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.userToDnMapping"></a>

```python
user_to_dn_mapping: typing.Union[IResolvable, typing.List[LdapConfigurationUserToDnMapping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping">LdapConfigurationUserToDnMapping</a>]]

user_to_dn_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#user_to_dn_mapping LdapConfiguration#user_to_dn_mapping}

---

### LdapConfigurationUserToDnMapping <a name="LdapConfigurationUserToDnMapping" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import ldap_configuration

ldapConfiguration.LdapConfigurationUserToDnMapping(
  ldap_query: str = None,
  match: str = None,
  substitution: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping.property.ldapQuery">ldap_query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#ldap_query LdapConfiguration#ldap_query}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping.property.match">match</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#match LdapConfiguration#match}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping.property.substitution">substitution</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#substitution LdapConfiguration#substitution}. |

---

##### `ldap_query`<sup>Optional</sup> <a name="ldap_query" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping.property.ldapQuery"></a>

```python
ldap_query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#ldap_query LdapConfiguration#ldap_query}.

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping.property.match"></a>

```python
match: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#match LdapConfiguration#match}.

---

##### `substitution`<sup>Optional</sup> <a name="substitution" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping.property.substitution"></a>

```python
substitution: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/ldap_configuration#substitution LdapConfiguration#substitution}.

---

## Classes <a name="Classes" id="Classes"></a>

### LdapConfigurationUserToDnMappingList <a name="LdapConfigurationUserToDnMappingList" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import ldap_configuration

ldapConfiguration.LdapConfigurationUserToDnMappingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LdapConfigurationUserToDnMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping">LdapConfigurationUserToDnMapping</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LdapConfigurationUserToDnMapping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping">LdapConfigurationUserToDnMapping</a>]]

---


### LdapConfigurationUserToDnMappingOutputReference <a name="LdapConfigurationUserToDnMappingOutputReference" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import ldap_configuration

ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resetLdapQuery">reset_ldap_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resetMatch">reset_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resetSubstitution">reset_substitution</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ldap_query` <a name="reset_ldap_query" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resetLdapQuery"></a>

```python
def reset_ldap_query() -> None
```

##### `reset_match` <a name="reset_match" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resetMatch"></a>

```python
def reset_match() -> None
```

##### `reset_substitution` <a name="reset_substitution" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resetSubstitution"></a>

```python
def reset_substitution() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.ldapQueryInput">ldap_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.matchInput">match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.substitutionInput">substitution_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.ldapQuery">ldap_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.match">match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.substitution">substitution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping">LdapConfigurationUserToDnMapping</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ldap_query_input`<sup>Optional</sup> <a name="ldap_query_input" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.ldapQueryInput"></a>

```python
ldap_query_input: str
```

- *Type:* str

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.matchInput"></a>

```python
match_input: str
```

- *Type:* str

---

##### `substitution_input`<sup>Optional</sup> <a name="substitution_input" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.substitutionInput"></a>

```python
substitution_input: str
```

- *Type:* str

---

##### `ldap_query`<sup>Required</sup> <a name="ldap_query" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.ldapQuery"></a>

```python
ldap_query: str
```

- *Type:* str

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.match"></a>

```python
match: str
```

- *Type:* str

---

##### `substitution`<sup>Required</sup> <a name="substitution" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.substitution"></a>

```python
substitution: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LdapConfigurationUserToDnMapping]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping">LdapConfigurationUserToDnMapping</a>]

---



